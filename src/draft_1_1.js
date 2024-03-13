import '../public/css/normalize.css';
import '../public/css/draft_common.scss';
import '../public/css/draft_1.scss';
import '../public/css/mockup.scss';

const mainWrap = document.querySelector('.main-wrap');
const depthWrap = document.querySelector('.depth-wrap');

mainWrap.addEventListener('click',function(){
  depthWrap.classList.add('active');
  mainWrap.classList.add('full-height');
});

depthWrap.addEventListener('click',function(){
  depthWrap.classList.remove('active');
  mainWrap.classList.remove('full-height');
});




