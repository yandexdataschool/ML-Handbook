var HEIGHT = 600;
var WIDTH = 800;
function main() {
  var canvas = document.getElementById('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  $(canvas).on('click', (e) => {
    add_point(e);
  });
  function add_point(e) {
    //let color = ctx.getImageData(e.clientX - canvas.offsetLeft,  e.clientY, 1, 1).data;
    // color = Array.from(color);
    // color.splice(color.length - 1, 1);
    // color = color.join(' ');
    // console.log('color :>> ', color);
    //let c;
    // 'orange', 'blue', 'green', 'purple',
    // switch(color){
    //   case '128 0 128': // -фиолетовый
    //   c = 3;
    //   break;
    //   case '0 0 255': // -синий
    //   c = 1;
    //   break;
    //   case '255 165 0': // -желтый
    //   c = 0;
    //   break;
    //   case '0 128 0': // -зеленый
    //   c = 2;
    //   break;
    // }
    //  redraw();
    //var ctx = canvas.getContext('2d');
    // ctx.beginPath();
    var p = get_click_coords(canvas, e);
    var neighbors = find_neighbors(p, state.points, state.k, state.metric);
    state.dum_neigh = neighbors;
    var c = majority_vote(neighbors, state.num_classes);
    p.push(c);
    state.dummies.push(p);
    redraw();

  }

  var ctx = canvas.getContext('2d');
  ctx.height = HEIGHT;
  ctx.width = WIDTH;

  // var num_classes = 3;
  // var num_points = 10;
  // var metric = l2_distance;
  // var k = 1;

  var state = {
    num_classes: 4,
    num_points: 60,
    cluster_std: 50,
    metric: l2_distance,
    dataset: generate_cluster_points_circles,
    k: 1,
    colors: [
      'red', 'blue', 'green', 'purple', 'orange',
    ],
    small_step: 3,
    big_step: 10,
    dummies: [],
    dum_neigh:1
  };

  function gen_points() {
    state.points = state.dataset(ctx, state.num_classes, state.num_points, state.cluster_std);

    let cls = [0, 0, 0, 0];
    state.points.forEach(item => {
      $(`.cls-num-${item[2]} span`).text((i, _str) => {
        cls[item[2]] += 1;
        return cls[item[2]];
      })
    });
  }
  gen_points();

  function redraw(speed) {
    var step = state.small_step;
    if (speed === 'fast') step = state.big_step;
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    draw_boundaries(ctx, state, step);
    draw_points(ctx, state.points, state.colors);
    if(dragging_point == null)
      draw_dummies(ctx, state.dummies.slice(-1), state.colors, state.k, state.metric, state.dum_neigh);
  }
  redraw();

  // Handlers for metric buttons
  $('#l2-btn').click(function () {
    // state.metric = l2_distance;
    state.metric = l2_distance;
    state.dummies = [];
    redraw();
  });
  $('#l1-btn').click(function () {
    state.metric = l1_distance;
    state.dummies = [];
    redraw();
  });

  // Handlers for dataset buttons
  $('#circles-btn').click(function () {
    state.dataset = generate_cluster_points_circles;
    gen_points();
    redraw();
  });
  $('#moonshapes-btn').click(function () {
    state.dataset = generate_cluster_points_moonshapes;
    gen_points();
    redraw();
  });
  $('#random-btn').click(function () {
    state.dataset = generate_cluster_points_random;
    gen_points();
    redraw();
  });

  // Handlers for buttons that set K
  for (var k = 1; k <= 7; k++) {
    (function () {
      var kk = k;
      $('#k-' + k + '-btn').click(function () {
        state.k = kk;
        redraw();
      });
    })();
  }

  // Handlers for buttons that set number of classes
  for (var c = 2; c <= 5; c++) {
    (function () {
      var cc = c;
      $('#num-cls-' + c + '-btn').click(function () {
        state.num_classes = cc;
        state.dummies = [];
        gen_points();
        redraw();
      });
    })();
  }

  var num_points_choices = [20, 30, 40, 50, 60];
  for (var i = 0; i < num_points_choices.length; i++) {
    (function () {
      var num_points = num_points_choices[i];
      var s = '#num-pts-' + num_points + '-btn';
      console.log(s);
      $('#num-pts-' + num_points + '-btn').click(function () {
        console.log('here');
        state.num_points = num_points;
        gen_points();
        state.dummies = [];
        redraw();
      });
    })();
  }

  var dragging_point = null;
  $(canvas).mousedown(function (e) {
    var p = get_click_coords(canvas, e);
    var thresh = 10;
    var idx = null;
    var min_dist = 100000;
    for (var i = 0; i < state.num_points; i++) {
      var dx = (p[0] - state.points[i][0]);
      var dy = (p[1] - state.points[i][1]);
      var d = Math.sqrt(dx * dx + dy * dy);
      if (d < thresh && d < min_dist) {
        min_dist = d;
        idx = i;
      }
    }
    dragging_point = idx;
  });
  $(canvas).mousemove(function (e) {
    //console.log(dragging_point);
    if (dragging_point === null) return;
    var p = get_click_coords(canvas, e);
    state.points[dragging_point][0] = p[0];
    state.points[dragging_point][1] = p[1];
    redraw('fast');
  });
  $(canvas).mouseup(function () {
    //console.log(dragging_point);
    if (dragging_point === null) return;
    dragging_point = null;
    redraw();
  })

}


function get_click_coords(obj, e) {
  var offset = $(obj).offset();
  var cx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(offset.left);
  var cy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(offset.top) + 1;
  return [cx, cy];
}



function randn() {
  // Using Box-Muller transform
  var u = 1 - Math.random();
  var v = 1 - Math.random();
  var r = Math.sqrt(-2 * Math.log(u));
  var t = Math.cos(2 * Math.PI * v);
  return r * t;
}


function generate_uniform_points(ctx, num_classes, num_points) {
  // Returns a list of [x, y, class]
  var points = [];
  for (var i = 0; i < num_points; i++) {
    var x = ctx.width * Math.random();
    var y = ctx.height * Math.random();
    var c = Math.floor(num_classes * Math.random());
    points.push([x, y, c]);
  }
  return points;
}

function generate_cluster_points_moonshapes(ctx, num_classes, num_points, std) {
  let shift = 150;
  let center = WIDTH / num_classes - shift / num_classes;

  var centers = [];
  for (let i = 0; i < num_classes; i++) {
    let x = center + shift * i;
    let y = HEIGHT / 2;
    centers.push([x, y]);
  }

  let points = [];
  for (let i = 0; i < num_points; i++) {
    let c = Math.floor(num_classes * Math.random());
    let nboo = c % 2 == 0 ? -1 : 1;
    let pi = (nboo * Math.random() * Math.PI);
    let x = Math.cos(pi) * 100 + centers[c][0];
    let y = Math.sin(pi) * 100 + centers[c][1];
    points.push([x, y, c]);
  }

  return points;
}

function generate_cluster_points_circles(ctx, num_classes, num_points, std) {  
  var centers = [];
  for (let i = 0; i < num_classes; i++) {
    let x = WIDTH / 2;
    let y = HEIGHT / 2;
    centers.push([x, y]);
  }

  let points = [];
  for (let i = 0; i < num_points; i++) {
    let c = Math.floor(num_classes * Math.random());
    let pi = (2 * Math.random() * Math.PI);
    let x = Math.cos(pi) * (c + .5) * 70 + centers[c][0];
    let y = Math.sin(pi) * (c + .5) * 70 + centers[c][1];
    points.push([x, y, c]);
  }

  return points;
}

function generate_cluster_points_random(ctx, num_classes, num_points, std) {
  // First generate random cluster centers
  var centers = [];
  for (var c = 0; c < num_classes; c++) {
    var x = ctx.width * Math.random();
    var y = ctx.height * Math.random();
    centers.push([x, y]);
  }

  // Now generate points near cluster centers
  var points = [];
  for (var i = 0; i < num_points; i++) {
    var c = Math.floor(num_classes * Math.random());
    var x = centers[c][0] + std * randn();
    var y = centers[c][1] + std * randn();
    points.push([x, y, c]);
  }
  return points;
}

function draw_points(ctx, points, colors) {
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1];
    var c = points[i][2];
    ctx.beginPath();
    ctx.globalAlpha = 1.0; 
    ctx.fillStyle = c!==null ? colors[c]:'black';
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}
function draw_dummies(ctx, points, colors, k, metric, neighbors) {
  draw_points(ctx, points, colors);
  if(points.length == 0 || neighbors==null)
  return;
  makeBound(ctx, points[points.length - 1], points,k, metric, neighbors);
}
function makeBound(ctx, p, points, k, metric, neighbors) {
  // ctx.lineWidth = 1;
  // ctx.strokeStyle = '#003300';
  // ctx.stroke();
  let npop = neighbors[neighbors.length-1];
  let radius = metric(npop, p);
  console.log(neighbors);
  if (metric == l2_distance) {
    ctx.beginPath();
    ctx.arc(p[0], p[1], radius, 0, 2 * Math.PI);
    console.log(p)
  }
  else if (metric == l1_distance)
    ctx.diamond(p[0], p[1], radius, radius);
  ctx.stroke();

}

function l2_distance(p1, p2) {
  var dx = p1[0] - p2[0];
  var dy = p1[1] - p2[1];

  return Math.sqrt(dx * dx + dy * dy);
}


function l1_distance(p1, p2) {
  var dx = p1[0] - p2[0];
  var dy = p1[1] - p2[1];
  return Math.abs(dx) + Math.abs(dy);
}
function l_inf(p1, p2) {
  var dx = p1[0] - p2[0];
  var dy = p1[1] - p2[1];
  return Math.abs(dx) + Math.abs(dy);
}


function find_neighbors(p, points, k, metric) {
  var dists = [];
  for (var i = 0; i < points.length; i++) {
    var dist = metric(p, points[i]);
    dists.push([dist, points[i]]);
  }
  dists.sort(function (a, b) { return a[0] - b[0] });
  var neighbors = [];
  for (var i = 0; i < k && i < dists.length; i++) {
    neighbors.push(dists[i][1]);
  }
  return neighbors;
}


function majority_vote(points, num_classes) {
  // Assume points is a list of the form [x, y, c]
  var votes = [];
  for (var c = 0; c < num_classes; c++) {
    votes.push(0);
  }
  for (var i = 0; i < points.length; i++) {
    votes[points[i][2]] += 1;
  }
  var max_votes = 0;
  var winner = null;
  for (var c = 0; c < num_classes; c++) {
    if (votes[c] === max_votes) {
      winner = null;
    } else if (votes[c] > max_votes) {
      max_votes = votes[c];
      winner = c;
    }
  }
  return winner;
}


function draw_boundaries(ctx, state, step) {
  var eps = 0;
  for (var x = step / 2; x < ctx.width; x += step) {
    for (var y = step / 2; y < ctx.height; y += step) {
      var neighbors = find_neighbors([x, y], state.points, state.k, state.metric);
      var c = majority_vote(neighbors, state.num_classes);

      if (c !== null) {
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = state.colors[c];
        ctx.fillRect(
          x - step / 2 - eps,
          y - step / 2 - eps,
          step + 2 * eps,
          step + 2 * eps);
      }
    }
  }
}


$(main);
