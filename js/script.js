function addStyle() {
    var tagA = document.getElementsByTagName("a");
    for (var i = 0; i < tagA.length; i++) {
        var getclass = tagA[i].getAttribute('class');
        if (getclass == "link") {
            var links = document.getElementsByClassName(getclass);
            for (var j = 0, l = links.length; j < l; j++) {
                links[j].onclick = function() {
                    render(this);
                    removeActive(links, 'active');
                    this.classList.add('active');
                    // this.style.color = "black";
                }
            }
        }
    }
}

function removeActive(els, klass) {
    for (var i = 0, l = els.length; i < l; i++) {
        els[i].classList.remove(klass);
    }
}

function creatP(el) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = "一个记忆盒子，存放着一些不经意的瞬间，<br/>希望在多年之后，你能从这里找回那些逝去的风景；<br /><br />";
    div.appendChild(p);
    var p1 = document.createElement("p");
    p1.innerHTML = "<br />ShikChan<br /> Mail：chikchann(at)gmail.com<br /><br />HeYan<br/>WeChat：78946855";
    p1.setAttribute("id","contact");
    div.appendChild(p1);
    el.appendChild(div);
}

function toggleDisplay() {
    var tagA = document.getElementsByTagName("a");
    for (var i = 0; i < tagA.length; i++) {
        var navId = tagA[i].getAttribute("id");
        if (navId == "city" || navId == "personal") {
            var nav = document.getElementById(navId);
            if (nav.innerHTML == "City") {
                nav.onclick = function() {
                    var nav_city = document.getElementById("nav_city");
                    var displayProperty = window.getComputedStyle(nav_city, null).getPropertyValue('display');
                    displayProperty === 'block' ? nav_city.style.display = 'none' : nav_city.style.display = 'block';
                }
            }
            if (nav.innerHTML == "Personal") {
                nav.onclick = function() {
                    var nav_personal = document.getElementById("nav_personal");
                    var displayProperty = window.getComputedStyle(nav_personal, null).getPropertyValue('display');
                    displayProperty === 'block' ? nav_personal.style.display = 'none' : nav_personal.style.display = 'block';
                }
            }
        }
    }
}

// window.onload = addStyle();
// window.onload = toggleDisplay();
addLoadEvent(addStyle);
addLoadEvent(toggleDisplay);
