//$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  //$("#navbarToggle").blur(function (event) {
    //var screenWidth = window.innerWidth;
    //if (screenWidth < 768) {
      //$("#collapsable-nav").collapse('hide');
    //}
  //});

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  //$("#navbarToggle").click(function (event) {
    //$(event.target).focus();
  //});
//});



/**(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";
var explorationsHome = "snippets/explorations-home.html";
var projects = "snippets/projects.html";
var aboutMe = "snippets/about-me.html";
var mixedMediaArt = "snippets/mixed-media.html";
var digitalArt = "snippets/digital.html";
var threeDimentionalArt = "snippets/3D.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

//Explorations Home load into index.html
dc.loadExplorationsHome = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    explorationsHome,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}

//Projects page load into index.html

dc.loadProjects = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    projects,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}

//About me page load into indexhtml

dc.loadAboutMe = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutMe,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}

dc.loadMixedMedia = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    mixedMediaArt,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}

dc.loadDigital = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    digitalArt,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}


dc.load3D = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    threeDimentionalArt,
    function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
}



global.$dc = dc;

})(window);**/




src="https://code.jquery.com/jquery-3.3.1.js"
integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin="anonymous">

$(function(){
      $("#header").load("../decorations/header.html"); 
      $("#footer").load("../decorations/footer.html");
});

