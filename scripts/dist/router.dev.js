"use strict";

var routie = require("../packages/routie");

nunjucks.configure('/views', {
  autoescape: true
});

function renderView(view) {
  $("#app").html(nunjucks.render(view + '.njk'));
  $(".active").removeClass("active");
  $("#" + view + "-header").addClass("active");
}

routie({
  '/home': function home() {
    renderView('home');
  },
  '/about': function about() {
    renderView('about');
  },
  '': function _() {
    renderView('home');
  },
  '/': function _() {
    renderView('home');
  }
});
$(document).ready(function () {
  routie('/');
});