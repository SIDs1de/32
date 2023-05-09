document.addEventListener('DOMContentLoaded', () => {

  const digitalMoving = () => {
    const rows = document.querySelectorAll('.digitaled__bg-item');
    rows[0].style.transform = 'translateX(-1500)'
    rows[1].style.transform = 'translateX(-900px)'
    rows[2].style.transform = 'translateX(-300px)'
    rows[3].style.transform = 'translateX(-1200px)'
    rows[4].style.transform = 'translateX(-150px)'

    window.addEventListener('scroll', () => {
      const s = window.scrollY
      rows[0].style.transform = `translateX(${-1500 + s * 0.26}px)`
      rows[1].style.transform = `translateX(${-800 - s * 0.1}px)`
      rows[2].style.transform = `translateX(${-300 + s * 0.07}px)`
      rows[3].style.transform = `translateX(${-1200 - s * 0.34}px)`
      rows[4].style.transform = `translateX(${-150 + s * 0.12}px)`
    })
  }

  const animations = () => {
    const fade = () => {
      console.log(document.documentElement.scrollWidth );
      if (window.innerWidth <= 700) {
        const fadeInRights = document.querySelectorAll('.animate__fadeInRight');

        fadeInRights.forEach(el => {
          el.classList.add('animate__fadeInLeft')
          el.classList.remove('animate__fadeInRight')
        })

        document.querySelector('.manual__card-img').classList.remove('animate__fadeInLeft');
        document.querySelector('.manual__card-img').classList.add('animate__fadeIn');
      }
    }
    const delay = () => {
      if (window.innerWidth <= 700) {
        const elements = document.querySelectorAll('[data-wow-delay]');
        elements.forEach(el => {
          const value = parseFloat(el.getAttribute('data-wow-delay'))

          if (value > 0.3) {
            el.setAttribute('data-wow-delay', '.3s')
          }
        })
      }
    }
    window.addEventListener('resize', () => {
      fade();
      delay();
    })
    fade();
    delay();

    const wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();
  }

  const openModals = () => {
    const btns = document.querySelectorAll('a[data-open-modal]');
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        html.classList.add('_modal-open')
        body.classList.add('_modal-open')
      })
    })

    const closeBtns = document.querySelectorAll('.modal__card-cross, .modal__content');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'modal__content' || (e.target.classList[0] == 'modal__card-circle--red') || e.target.classList[0] == 'modal__card-success-btn') {
          html.classList.remove('_modal-open')
          body.classList.remove('_modal-open')
        }
      })
    })

  }

  digitalMoving();
  animations();
  openModals();
})
