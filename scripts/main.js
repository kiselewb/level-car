// Определение устройства

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}

// Добавление стрелки меню при определенном устройстве

if (isMobile.any()) {
    document.body.classList.add('_touch')
    let navbarLinks = document.querySelectorAll('.contacts-navbar__phone')
    if (navbarLinks) {
        navbarLinks.forEach(navbarLink => {
            navbarLink.addEventListener('click', () => {
                navbarLink.classList.toggle('_active')
            })
        })
    }
} else {
    document.body.classList.add('_pc')
}

// Работа меню-бургер

let navbarIcon = document.querySelector('.navbar__icon')
if (navbarIcon) {
    let navbarWrapper = document.querySelector('.navbar__wrapper')
    navbarIcon.addEventListener('click', () => {
        document.body.classList.toggle('_lock')
        navbarIcon.classList.toggle('_active')
        navbarWrapper.classList.toggle('_active')
    })
}

// Инициализация слайдеров

$(document).ready(function(){
    $('.main__slider').slick({
        dots: true,
        infinite: false,
    });
});

  $(document).ready(function(){
    $('.catalog-slider').slick({
        slidesToShow: 3.3,
        infinite: false,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2.3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1.3,
                arrows: false,
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1.1,
                arrows: false,
              }
            },
          ]
    });
});