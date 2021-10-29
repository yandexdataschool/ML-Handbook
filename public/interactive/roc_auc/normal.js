(function () {
  var container,
    svg,
    xlim,
    x,
    y,
    s_mean = 0,
    s_stddev = 1 /* sick */,
    h_mean = 0,
    h_stddev = 1 /* healthy */,
    line = d3.svg
      .line()
      .x(function (d) {
        return x(d.x);
      })
      .y(function (d) {
        return y(d.y);
      });

  if (typeof normal === "undefined") normal = {};
  function pnorm_lower(mean, stddev, x) {
    var i,
      reverse = false,
      t,
      sum,
      tm,
      prob,
      z_score,
      coeffs = [0.2316419, 0.31938153, -0.356563782, 1.781477937, -1.821255978, 1.330274429];
    z_score = (x - mean) / stddev;
    stddev = 1;
    if (z_score < 0) {
      z_score = -z_score;
      reverse = true;
    }
    t = 1 / (1 + coeffs[0] * z_score);
    sum = 0;
    tm = 1;
    for (i = 1; i < 6; ++i) {
      tm *= t;
      sum += coeffs[i] * tm;
    }
    prob = 1 - sum * (Math.exp(-z_score * z_score * 0.5) / Math.sqrt(2 * Math.PI));
    return reverse ? 1 - prob : prob;
  }

  function pnorm_greater(mean, stddev, x) {
    return 1 - pnorm_lower(mean, stddev, x);
  }

  function normal_dist(mean, stddev) {
    var x = xlim[0],
      y,
      xe = (xe = xlim[1]),
      f,
      p,
      data = [];
    q = 2 * stddev * stddev;
    for (; x <= xe; x += 0.05) {
      y = Math.exp(-Math.pow(x - mean, 2) / q) / Math.sqrt(Math.PI * q);
      data.push({ x: x, y: y });
    }
    /* when normal curve does not touch the x-axis */
    data.unshift({ x: data[0].x, y: 0 });
    data.push({ x: x - 0.05, y: 0 });
    return data;
  }

  function axes(height) {
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.svg.axis().scale(x).orient("bottom"));
    svg.append("g").attr("class", "y axis").call(d3.svg.axis().scale(y).orient("left"));
    svg.append("line").attr("class", "normal-threshold").attr("y1", 0).attr("y2", height);
    svg.append("text").attr("class", "normal-threshold-prob").attr("y", -10);
    svg.append("text").attr("class", "normal-threshold-label").text("threshold");
  }

  function render_normal(id, data) {
    svg.select("#" + id).remove();
    svg
      .append("path")
      .datum(data)
      .attr("id", id)
      .attr("class", "line")
      // .style('stroke', 'red')
      .attr("d", line);
  }

  function add_slider(dom, lbl, cls, min, max, num_steps, default_value) {
    dom.append("div").text(lbl);
    return dom
      .append("input")
      .attr("class", cls)
      .attr("style", "max-width:130px")
      .attr("type", "range")
      .attr("min", min)
      .attr("max", max)
      .attr("step", (max - min) / num_steps)
      .attr("value", default_value)
      .on("input", function () {
        switch (this.className) {
          case "sick-mean":
            s_mean = this.value;
            break;
          case "sick-stddev":
            s_stddev = this.value;
            break;
          case "healthy-mean":
            h_mean = this.value;
            break;
          case "healthy-stddev":
            h_stddev = this.value;
            break;
        }
        normal.refresh();
      });
  }

  function render_controls() {
    var d = container.append("div"),
      s,
      h,
      num_steps = 100;
    s_mean = -1;
    s_stddev = 1;
    s = d.append("div").attr("class", "sick");
    s.append("div").attr("class", "title").text("Sick");
    // add_slider(s, "Mean", "sick-mean",
    //            xlim[0], 0, num_steps, s_mean);
    add_slider(s, "Mean", "sick-mean", "-3", 2, num_steps, s_mean);
    add_slider(s, "SD", "sick-stddev", 0.5, 2, num_steps, s_stddev);
    h_mean = 1;
    health_stddev = 1;
    h = d.append("div").attr("class", "healthy");
    h.append("div").attr("class", "title").text("Healthy");
    // add_slider(h, "Mean", "healthy-mean",
    //            0, xlim[1], num_steps, h_mean);
    add_slider(h, "Mean", "healthy-mean", 0, 4, num_steps, h_mean);
    add_slider(h, "SD", "healthy-stddev", 0.5, 2, num_steps, h_stddev);
    normal.refresh();
  }

  function generate_roc_path() {
    var x = xlim[0],
      xe = xlim[1],
      data = [];
    for (; x <= xe; x += 0.05) {
      tpr = pnorm_greater(h_mean, h_stddev, x);
      fpr = pnorm_greater(s_mean, s_stddev, x);
      data.push({ x: fpr, y: tpr });
    }
    return data;
  }

  normal.refresh = function () {
    render_normal("sick", normal_dist(s_mean, s_stddev));
    render_normal("healthy", normal_dist(h_mean, h_stddev));
    roc.path(generate_roc_path());
  };

  normal.init = function (id, xlimits, width, height, margin) {
    container = d3.select("#" + id);
    xlim = xlimits;
    x = d3.scale.linear().domain(xlim).range([0, width]);
    xr = d3.scale.linear().domain([0, width]).range(xlim);
    y = d3.scale.linear().domain([0, 1]).range([height, 0]);
    svg = container
      .append("svg")
      .attr("width", width + 2 * margin)
      .attr("height", height + 2 * margin)
      .append("g")
      .attr("transform", "translate(" + margin + "," + margin + ")");
    axes(height);
    render_controls();
    container.on("mousemove", function () {
      var coord = d3.mouse(this),
        cx = coord[0],
        lx,
        tpr,
        fpr;
      cx = cx - margin;
      if (cx < 0) cx = 0;
      else if (cx > width) cx = width;
      lx = xr(cx);
      tpr = pnorm_greater(h_mean, h_stddev, lx);
      fpr = pnorm_greater(s_mean, s_stddev, lx);
      svg.select(".normal-threshold").attr("x1", cx).attr("x2", cx);
      svg
        .select(".normal-threshold-prob")
        .attr("x", cx)
        .text("(" + fpr.toFixed(2) + ", " + tpr.toFixed(2) + ")");
      svg
        .select(".normal-threshold-label")
        .attr("transform", "translate(" + (cx + 12) + "," + height / 3 + ") rotate(-90)");
      roc.point(tpr, fpr);
    });
  };
})();
