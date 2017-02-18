// function toggleMenu() {
//   var menuBox = document.getElementById('hide');
//   if(menuBox.style.display == "flex") {
//     menuBox.style.display = "none";
//   }
//   else {
//     menuBox.style.display = "flex";
//   }
// }
//
(function() {

  var button = document.getElementById("nav-button");
  var nav = document.getElementById("nav");

  button.addEventListener("click", function() {
    nav.classList.toggle('toggle');
  });

})();

// //showing
// document.getElementById('nav').style.display = 'flex';
//
// //hiding
// document.getElementById('nav').style.display = 'none';
//
// var hideNav = document.getElementById(nav);
//   if ( hideNav.style.display != 'none') {
//       hideNav.style.display = 'none';
//   }
//   else {
//       hideNav.style.display = 'flex';
//   }
