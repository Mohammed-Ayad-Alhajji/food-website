// ********* HEADER BEGIN ********** 
// Navbar menu
const menu = document.querySelector('nav .menu'); 
const menuButton = document.querySelector('.menu-trigger'); 

menuButton.addEventListener('click', () => {
    setTimeout(() => {
        if (!menu.classList.contains('show')) {
            menu.classList.add('show');
            document.body.classList.add('menu-visible'); 
        }
    }, 30); 
});
// When click out side menu
document.addEventListener('click', (e) => {
    const isClickInsideMenu = e.target.closest('nav .menu'); 

    if (!isClickInsideMenu && menu.classList.contains('show')) {
        menu.classList.remove('show');
        document.body.classList.remove('menu-visible');
    }
});
// Navbar search
const divSearch = document.querySelector('.search-trigger');
const addSearch = document.querySelector('.site');

divSearch.addEventListener('click', () => {
    addSearch.classList.toggle('show-search');
})
// ********* HEADER END **********
const sliderThumb = new Swiper('.thumb-nav', {
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: false,
    breakpoints: {
        992:{
            direction: 'vertical'
        }
    }
});

const theSlider = new Swiper('.thumb-big', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    thumbs: {
      swiper: sliderThumb,
    }
});

// ********* TABBED PRODUCT **********
const tabbedNav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidesPerView: 6,
    slidesPerGroup: false,
});

const sliderTabbed = new Swiper('.tabbed-item', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
      swiper: tabbedNav,
    }
});

// Animation
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
          entry.target.classList.add('this');
        }
    })
})
const box = document.querySelectorAll('.animate');
box.forEach((el) => {
  io.observe(el);
})
