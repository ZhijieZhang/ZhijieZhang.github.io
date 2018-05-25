var sections = document.body.getElementsByTagName("section");

function addLoadEvent(func){
    var oldOnload = window.onload;
    if (typeof oldOnload !== "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

// TODO
function scrollWithNavItem(){
    document.body.onscroll = function(){
        // console.log(window.pageYOffset);
    }
}

function navLinksClick(){
    if (!document.getElementsByClassName) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByClassName("nav navbar-nav navbar-center")) return false;
    var nav = document.getElementsByClassName("nav navbar-nav navbar-center");
    var links = nav[0].getElementsByTagName("a");
    if (links.length < 1) return false;
    for (var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            // highlight the section we are looking at the navbar
            highlightCurrNavItem(this, links);
            // page scroll animation
            return !pageScrollTo(this.getAttribute("href"));
        };
    }
}

function highlightCurrNavItem(currHref,links){
    currHref.setAttribute("id","nav-highlight");
    //remove other links that has the same id.
    for (var j = 0; j < links.length; j++){
        if (links[j].getAttribute("href") !== currHref.getAttribute("href")){
            links[j].removeAttribute("id");
        }
    }
}

function pageScrollTo(href){
    var startIndex = href.indexOf('#')+1;
    var endIndex = href.length;
    var section = href.substring(startIndex,endIndex);
    for (var i = 0; i < sections.length; i++){
        if (sections[i].getAttribute("id") === section){
            var final_y = sections[i].offsetTop;
            var interval = 250;
            $('html,body').animate({scrollTop: final_y}, interval);
        }
    }
    return true;
}

addLoadEvent(navLinksClick);
addLoadEvent(scrollWithNavItem);