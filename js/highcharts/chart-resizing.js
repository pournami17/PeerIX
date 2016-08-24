$(function(){
  // This file is to work around a limitation of Highcharts where the legend grows
  // beyond the size of the chart and/or its container's initial height. This will
  // re-size the chart and its container's height to make sure the legend is fully visible.
  //
  // Assumptions:
  //   * The legend is aligned vertically and is displayed below the chart off the get go.
  //   * This will not re-position the legend, just make sure the chart and parent are
  //     big enough to contain it so it is in full view for the user
  //
  // Notes:
  //   * You can not use pure jquery pseudo selectors if you are supporting IE7 or IE8
  //     because they will fail if VML is present on the page (which is with Highcharts)
  //     This means do not write $(":text"), instead you have to write $("input:text")
  //
  //     Reference: http://www.sitecrafting.com/blog/jquery-cufon-dont-mix/
  var selector = "[data-chart-type]";

  // ---------------------------------------------------------------------------------
  //                                HANDLERS
  // ---------------------------------------------------------------------------------
  $("body").delegate(selector, "chart:initialized chart:resized", positionLegendAndResizeChart);
  

  // ---------------------------------------------------------------------------------
  //                               DEFINITIONS
  // ---------------------------------------------------------------------------------

  // SVGChartResizing represents the default chart resizing behavior. It is the base class
  // used to define the API and required strategy for resizing the chart. 
  function SVGChartResizing(container){
    this.container = $(container);
  }

  SVGChartResizing.prototype.chart = function(){ return this.container.find("svg:first"); };
  SVGChartResizing.prototype.chartHeight = function(){ 
    var chart = this.chart(),
        height = parseInt(chart.height(), 10);
    return isNaN(height) ? chart[0].getBBox().height : height;
  };
  SVGChartResizing.prototype.hasLegend = function(){ return this.legend().length !== 0; };
  SVGChartResizing.prototype.legend = function(){ return this.chart().find(".highcharts-legend"); };
  SVGChartResizing.prototype.legendHeight = function(){ return this.legend()[0].getBBox().height; };
  SVGChartResizing.prototype.parent = function(){ return this.chart().parents(":first"); };
  SVGChartResizing.prototype.parentHeight = function(){ return this.parent().height(); };

  SVGChartResizing.prototype.legendY = function(){
    // this.legend().offset().top doesn't return consistently across browsers
    return this.legend().position().top - this.chart().position().top;
  };

  SVGChartResizing.prototype.positionLegendAndResize = function(){
    if(!this.hasLegend()) return;
  
    var chart_h = this.chartHeight(),
      legend_y = this.legendY(),
      legend_h = this.legendHeight(),
      parent_h = this.parentHeight(),
      recommended_h = legend_y + legend_h;

    if(recommended_h >= parent_h){
      this.parent().height(recommended_h);
    }

    if(recommended_h >= chart_h) {
      this.chart().height(recommended_h);
    }
    
    this.chart().width(this.parent().width());
    
  };
  
  function Firefox3SVGChartResizing(container){
    this.container = $(container);
  }
  Firefox3SVGChartResizing.prototype = new SVGChartResizing();
  Firefox3SVGChartResizing.prototype.legendHeight = function(){
    // Firefox 3.6 improperly returns the height
    return this.legend()[0].getBBox().height + 10;
  };


  // IEVMLChartResizing represents the the chart resizing functionality for Internet 
  // Explorer 7 and 8 which do not support SVG, and Highcharts uses VML to draw those 
  // charts. It extends SVGChartResizing and overrides the necessary functions.
  function IEVMLChartResizing(container){
    this.container = $(container);
  }
  IEVMLChartResizing.prototype = new SVGChartResizing();
  IEVMLChartResizing.prototype.chart = function(){ return $(this.container.data('chart').container); };
  IEVMLChartResizing.prototype.legendY = function(){ return this.legend()[0].offsetTop; };
  IEVMLChartResizing.prototype.legendHeight = function(){
    var version = $.browser.version.slice(0,1), 
        legend = this.legend(),
        legend_h, 
        values;
      
    if(version === "7"){
      values = $.map(legend.children(), function(e){ return e.offsetHeight; });
      legend_h = Math.max.apply(Math, values);
    } else if(version === "8"){
      legend_h = legend[0].scrollHeight;
    }
  
    return legend_h;
  };

  
  // positionLegendAndResizeChart ensures the chart is given a big enough view port
  // to be viewed and resizes its height if necessary
  function positionLegendAndResizeChart() {
    var resizer,
        version = $.browser.version.slice(0,1);
    
    if($.browser.msie && (version === "7" || version === "8")){
      // for IE7 and IE8
      resizer = new IEVMLChartResizing($(this));
    } else if($.browser.mozilla && (version === "1")){
      // for Firefox 3.x
      resizer = new Firefox3SVGChartResizing($(this));
    } else {
      resizer = new SVGChartResizing($(this));
    }
    resizer.positionLegendAndResize();
  }
});