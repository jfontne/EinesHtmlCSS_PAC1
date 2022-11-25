 //dades
 import categories from '../data/categories.json' /*assert {type: "json"}*/;
 import grups from '../data/grups.json';

 const containerSlide = document.getElementById('contenidorSwiper');

categories.forEach(categoria => {
  
  let slide = document.createElement('div');
  slide.className = "swiper-slide";
  slide.style.backgroundImage = `url('img/${categoria.img}')`;
  slide.style.backgroundPosition = 'center';
  let link = document.createElement('a');
  link.href = `./categoria.html?cat=${categoria.id}`;
  link.innerHTML = `<H1>${categoria.titulo}</H1>`;
  //let img = document.createElement('img');
  //img.src = `img/slide/${categoria.img}`;
  //link.append(img);

  slide.append(link);
  containerSlide.append(slide);

});

// core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// Configuramos los módulos a usar
Swiper.use([Navigation, Pagination]);



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500
    //disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let containerGrup = document.getElementById('grups');
grups.forEach(grup =>{
  let divGrup = document.createElement('div');
  divGrup.className = "grup";
  let imgGrup =  document.createElement('img');
  let linkGrup = document.createElement('a');
  imgGrup.className = 'imgGrup';
  imgGrup.src = `img/grups/${grup.fotoGrup}`;
  imgGrup.alt = grup.nom;
  linkGrup.href = `grup.html?grup=${grup.nom}`;
  linkGrup.append(imgGrup);
  let titolGrup = document.createElement('h1');
  titolGrup.innerText = grup.nom;
  divGrup.appendChild(linkGrup);
  divGrup.appendChild(titolGrup);
  containerGrup.append(divGrup);
  
});


//containerGrup.append(ulGrup);
