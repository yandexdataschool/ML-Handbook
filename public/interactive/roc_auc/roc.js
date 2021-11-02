/* Copyright 2016 Gagarine Yaikhom (MIT License) */
(function () {
  var container, svg, x, y, line, height2;

  if (typeof roc === "undefined") roc = {};

  function axes(width, height, margin) {
    two_third = (margin * 2) / 3;
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.svg.axis().scale(x).orient("bottom"));
    svg
      .append("text")
      .attr("class", "x-label")
      .attr("transform", "translate(" + width / 2 + "," + (height + two_third) + ")")
      .text("False Positive Probability");
    svg
      .append("text")
      .attr("class", "x-label2")
      .attr("transform", "translate(" + (width / 2 + 3.3 * two_third) + "," + (height - two_third / 2) + ")")
      .text("False Positive Probability");

    svg.append("g").attr("class", "y axis").call(d3.svg.axis().scale(y).orient("left"));
    svg
      .append("text")
      .attr("class", "y-label")
      .attr("transform", "translate(" + -two_third + "," + height / 2 + ") rotate(-90)")
      .text("True Positive Probability");
    svg.append("line").attr("class", "diagonal").attr("x1", 0).attr("y1", height).attr("x2", width).attr("y2", 0);
    height2 = height;
    widthh = width;
  }

  roc.point = function (tpr, fpr) {
    var point = svg.select(".roc-point"),
      coord = svg.select(".roc-point-coord"),
      displacement = 10;
    if (point.empty()) {
      point = svg.append("circle").attr("class", "roc-point").attr("r", 4);
      coord = svg.append("text").attr("class", "roc-point-coord");
    }
    point.attr("cx", x(fpr)).attr("cy", y(tpr));
    coord
      .text("(" + fpr.toFixed(2) + ", " + tpr.toFixed(2) + ")")
      .attr("transform", "translate(" + (x(fpr) + displacement) + "," + (y(tpr) - displacement) + ")");
  };

  roc.path = function (data, height) {
    let glArea = calculateArea(data);
    svg.select(".x-label2").text("AUC = " + glArea.toFixed(2));
    var path = svg.select(".roc-path");
    if (path.empty())
      path = svg
        .append("path")
        .datum(data)
        .attr("class", "roc-path")
        .style("fill", "#ffd803")
        .style("opacity", 0.5)
        // .style('transform', 'translate(0px, 10px)')
        // .style('transform', 'rotate(37deg) translate(100px, 0px)')
        .attr("d", areaUnderCurve(data));
    else
      path
        .datum(data)
        // .style('fill', 'lightgrey')
        .style("opacity", 0.5)
        // .style('transform', 'translate(0px, 10px)')
        // .style('transform', 'rotate(37deg)')
        .attr("d", areaUnderCurve(data));
  };
  // numerical integration
  function calculateArea(points) {
    var area = 0.0;
    var length = points.length;
    if (length <= 2) {
      return area;
    }
    points.forEach(function (d, i) {
      var x = 0,
        y = 1;
      if ("undefined" !== typeof points[i - 1]) {
        area += ((points[i].x - points[i - 1].x) * (points[i - 1].y + points[i].y)) / 2;
      }
    });
    return Math.abs(area);
  }
  function areaUnderCurve(data) {
    var areaGenerator = d3.svg
      .area()
      .x(function (d) {
        return x(d.x);
      })
      .y0(height2)
      .y1(function (d) {
        return y(d.y);
      });

    return areaGenerator(data);
  }
  // function drawArea(data, tpr, fill) {
  //     svg.append("path")
  //       .attr("class", "area")
  //       .attr("id", tpr + "Area")
  //       .style({
  //         "fill": fill,
  //         "opacity": 0
  //       })
  //       .attr("d", areaUnderCurve(data, tpr))
  //   }

  roc.init = function (id, width, height, margin) {
    container = d3.select("#" + id);
    (x = d3.scale.linear().domain([0, 1]).range([0, width])), (y = d3.scale.linear().domain([0, 1]).range([height, 0]));
    line = d3.svg
      .line()
      .x(function (d) {
        return x(d.x);
      })
      .y(function (d) {
        return y(d.y);
      });
    // .x(function(d) { return x(d.date); })
    // .y0(height)
    // .y1(function(d) { return y(d.close); });
    svg = container
      .append("svg")
      .attr("width", width + 2 * margin)
      .attr("height", height + 2 * margin)
      .append("g")
      .attr("transform", "translate(" + margin + "," + margin + ")");
    axes(width, height, margin);
  };
})();
