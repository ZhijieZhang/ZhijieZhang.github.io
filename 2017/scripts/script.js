// var sections = document.body.getElementsByTagName("section");

// function addLoadEvent(func){
//     var oldOnload = window.onload;
//     if (typeof oldOnload !== "function"){
//         window.onload = func;
//     }else{
//         window.onload = function(){
//             oldOnload();
//             func();
//         }
//     }
// }

// // TODO
// function scrollWithNavItem(){
//     document.body.onscroll = function(){
//         // console.log(window.pageYOffset);
//     }
// }

// function navLinksClick(){
//     if (!document.getElementsByClassName) return false;
//     if (!document.getElementsByTagName) return false;
//     if (!document.getElementsByClassName("nav navbar-nav navbar-center")) return false;
//     var nav = document.getElementsByClassName("nav navbar-nav navbar-center");
//     var links = nav[0].getElementsByTagName("a");
//     if (links.length < 1) return false;
//     for (var i = 0; i < links.length; i++){
//         links[i].onclick = function(){
//             // highlight the section we are looking at the navbar
//             highlightCurrNavItem(this, links);
//             // page scroll animation
//             return !pageScrollTo(this.getAttribute("href"));
//         };
//     }
// }

// function highlightCurrNavItem(currHref,links){
//     currHref.setAttribute("id","nav-highlight");
//     //remove other links that has the same id.
//     for (var j = 0; j < links.length; j++){
//         if (links[j].getAttribute("href") !== currHref.getAttribute("href")){
//             links[j].removeAttribute("id");
//         }
//     }
// }

// function pageScrollTo(href){
//     var startIndex = href.indexOf('#')+1;
//     var endIndex = href.length;
//     var section = href.substring(startIndex,endIndex);
//     for (var i = 0; i < sections.length; i++){
//         if (sections[i].getAttribute("id") === section){
//             var final_y = sections[i].offsetTop;
//             var interval = 250;
//             $('html,body').animate({scrollTop: final_y}, interval);
//         }
//     }
//     return true;
// }

// addLoadEvent(navLinksClick);
// addLoadEvent(scrollWithNavItem);

// // function pageScrollTo(final_y, interval){
// //     var ypos = window.pageYOffset;
// //     console.log("ypos before:" + ypos);
// //     var distance;
// //     if (document.body.movement){
// //         clearInterval(document.body.movement);
// //     }
// //     if (ypos === final_y){
// //         return true;
// //     }
// //     if (ypos < final_y){
// //         // distance = Math.ceil((final_y - ypos) / 10);
// //         // ypos += distance;
// //         ypos++;
// //     }
// //     if (ypos > final_y){
// //         distance = Math.ceil((ypos- final_y) / 10);
// //         ypos -= distance;
// //         // ypos--;
// //     }
// //     console.log("distance: " + distance);
// //     console.log("ypos after: " + ypos);
// //     console.log("final_y: " + final_y);
// //     window.scrollTo(0,ypos);
// //     console.log(window.pageYOffset);
// //     document.body.movement = setTimeout(pageScrollTo, interval, final_y, interval);
// // }