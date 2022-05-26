var nut = document.querySelectorAll('.nut ul li')
var slide = document.querySelectorAll('.item')
var next = document.querySelector('.phai')
var forw = document.querySelector('.trai')

// auto slide
var tg = setInterval(function () {
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht < 2) {
        slide[ptht].nextElementSibling.classList.add('hien')
        nut[ptht].nextElementSibling.classList.add('xam')
        ptht = ptht + 1
    }
    else if (ptht == 2) {
        slide[0].classList.add('hien')
        nut[0].classList.add('xam')

    }
}, 3000)


// phim duowi
for (i = 0; i < nut.length; i++) {
    nut[i].onclick = function () {
        clearInterval(tg)
        for (k = 0; k < nut.length; k++) {
            nut[k].classList.remove('xam')
            slide[k].classList.remove('hien')
        }
        this.classList.add('xam')
        var sl = this;
        for (vtn = 0; sl = sl.previousElementSibling; vtn++) { }
        slide[vtn].classList.add('hien')
    }
}



// hai ben
next.onclick = function () {
    clearInterval(tg)
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht < 2) {
        slide[ptht].nextElementSibling.classList.add('hien')
        nut[ptht].nextElementSibling.classList.add('xam')
        ptht = ptht + 1
    }
    else if (ptht == 2) {
        slide[0].classList.add('hien')
        nut[0].classList.add('xam')

    }

}
forw.onclick = function () {
    clearInterval(tg)
    var slht = document.querySelector('.hien')
    for (ptht = 0; slht = slht.previousElementSibling; ptht++) { }
    for (k = 0; k < nut.length; k++) {
        nut[k].classList.remove('xam')
        slide[k].classList.remove('hien')
    }
    if (ptht > 0) {
        slide[ptht].previousElementSibling.classList.add('hien')
        nut[ptht].previousElementSibling.classList.add('xam')
        ptht = ptht - 1
    }
    else if (ptht == 0) {
        slide[2].classList.add('hien')
        nut[2].classList.add('xam')

    }

}



