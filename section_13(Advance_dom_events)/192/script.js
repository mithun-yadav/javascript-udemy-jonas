'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //// morden way for morden browser
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////
// Page Navigation
//Not an effective way (bad practice)
// document.querySelectorAll('.nav__link').forEach( // 3 buttons so there would be 3 copies of the same code
//   function(el){
//      el.addEventListener('click',function(e){
//       e.preventDefault(); // stop default scrolling and others default
//       console.log('LINK');
//       const id = this.getAttribute('href');
//       console.log(id); //relative url
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//      });
//   }
// );

//effective way
// same by event deligation (2 step)
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tabbed component
//------------193---------------//
 const h1 = document.querySelector('h1');

// //Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]
// console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
// console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight]
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'yellow';

// // Going upward: parents
// console.log(h1.parentNode); // <div class ='header__title'></div>
// console.log(h1.parentElement); // <div class ='header__title'></div>

// // for finding parent other then direct parent
// // closest method is just opposite of querySelector(it select child element no matter how deep it is inserted) and closest method select parent element no matter how far it is
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going sideways: selecting siblings
//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // getting all children
// console.log(h1.parentElement.children);
// console.log(h1.parentElement.childNodes);

// [...h1.parentElement.children].forEach((el)=> {if(el !== h1) el.style.transform = 'scale(0.5)'});

//----------194-------------//
// Building a tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// tabs.forEach(t=> t.addEventListener('click',function(){
//   console.log('TAB');
// }))
tabsContainer.addEventListener('click', function (e) {
  /*const tabClass = e.target.getAttribute('class');
  if(e.target.classList.contains('operations__tab')) {
    console.log(tabClass);
    e.target.classList.toggle('operations__tab--active');
    // if(e.target.classList.contains('operations__tab--active')){
    //   console.log('Already exist')
    // }else{
    //   e.target.classList.add('operations__tab--active');

    // }
  };
  // console.log(tabClass);
  */
  const clicked = e.target.closest('.operations__tab');  // now wheather clicking on number or text of the tab button, always select the button

  // Gaurd clause. if nothing find finish function immediately
  if (!clicked) return;

  //Activate Tab and remove all active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate content area and remove all active classes
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
//------------195--------------//

//Menu fade animation
//-- Passing Argument to event handler --//
//in this lecture we implement the logic of fading other links when hover over any link
const nav = document.querySelector('.nav');
// we can't use mousenter because it not bubble // opposite of mousenter is mouseleave and opposite of mousehover is mouseout
/*
nav.addEventListener('mouseover',function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity =0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout',function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity =1;
    });
    logo.style.opacity = 1;
  }
});
*/
///--------<----------------||------------------>--------///
// refactoring the avobe code (because it not obey DRY princple)

/*
const handleHover = function(e,opac){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity =opac;
    });
    logo.style.opacity = opac;
  }
}

nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5);
});

nav.addEventListener('mouseout',function(e){
  handleHover(e,1);
});
*/

// --------- above same functionality same by bind method ----------//
// in bind method argument passes inside bind method will sets the 'this' keyword
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
//--------------196--------------------//
// Sticky navigation: Intersection Observer API
//-----------<-----impelementing a sticky navigation the scroll event----->-------------//
// scroll event get found in window object (it usually be avoided. Here scroll event fires in every bit of scrolling so it can make website slow)

/*
const initialcoords = section1.getBoundingClientRect();
console.log(initialcoords.top);
window.addEventListener('scroll',function(){
  if(window.scrollY>initialcoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/


//--------------197-----------------//
//---------<||---------implementing same sticky navigation functionility (intersection observer api)---------||>----------//

//--------practice intersectionObserver----------//
/*
const obsCallback = function(entries,observer){ // take two arguments (entries is the threshold array) // here observer arguments has no work
  //this function get called when the observed element intersect the root element at the threshold that is defined
   entries.forEach(entry => {
    console.log(entry);
   });
};

const obsOptions = {
  root: ( is the element which target is intersecting) null, // by null we can see the intersection between selected section and the viewport.
  threshold: 0.1, // percentage of intersection at which obsOptions function will be called. it will call func twice once while entering and other while leaving (threshold can be an array). Here when 10% of section 1 appears into viewport then func get called
  //threshold: [0.1,0.3], // 0 means it will call only at once at begning the of section1. 1 means it only get called once entire section1 come into view port( in this case can't come). 0.3 means func get called at when it crosses 30% from begining and 30% from the end
};

const observer = new IntersectionObserver(obsCallback,obsOptions); // it will take two arguments one function and other object
observer.observe(section1); // here observer observe the section 1 
*/

//--------making sticky navbar -----------// 

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky'); // isIntersecting --> true if intersection happens otherwise false. Here sticky addded when 10% of the section1 is remaining in viewport
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // it will imagine a box of width of navHeight px(rem % not work) outside the targrt but if we want it to imagine inside than put - sign. so sticky will get added at navHeight px.
});

headerObserver.observe(header);

///////////////////////////////////////
//----------<||--------198-------||>---------//
//---------------Reavealing elements and section on scroll--------------//
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // unobserving
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// attaching sectionObserver to all section
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//----------<||---------199----------||>------------//
//---------------Lazy loading images-----------------//
const imgTargets = document.querySelectorAll('img[data-src]'); // selecting image which has data-src as a class
//console.log(imgTarget);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return; // untill intersection not occurs just leave the function

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
//------------<||--------200---------||>-----------//
//Building a slider component: part1

//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  //const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;
  
// slider.style.transform = 'scale(0.2) translateX(-1600px)';
// slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach(function (_,i) {  // _ through away variable
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
//--------<||----201----||>--------//
// slider

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      //console.log(e.target);
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/*
//----------<||---------------202----------------||>---------//
// life cycle = time from access the website till one leave the website

// DOMcontentLoaded -- it will fire by document when html of the page get loaded i.e html parsed

// as script tag is at end of html so no need to add DOMContentLoaded.
document.addEventListener('DOMContentLoaded',function(e){
  console.log('HTML parsed and DOM tree built',e);
});

// load event passes by window when everything of website get loaded
window.addEventListener('load',function(e){
  console.log('Page fully loaded',e);
});

// beforeunload is of window executed before closing the page
window.addEventListener('beforeunload',function(e){
  e.preventDefault(); // not necessecery here as we use chrome but required in othe browsers
  console.log('before closing the page',e);
  e.returnValue = ''; // it have to include because of some historical region
});

//----------<||-------203---------||>----------//

in this lecture sir told about defer and async script file loading in slides
*/