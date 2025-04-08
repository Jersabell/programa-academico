// btn registro
document.getElementById('btn-register-fixed').addEventListener('click', function () {
    const header = document.getElementById('header');
    const headerOffset = header.offsetTop;
  
    window.scrollTo({
      top: headerOffset,
      behavior: 'smooth'
    });
    console.log('click boton')
  });

  window.addEventListener('scroll', function () {
    const btnGoUp = document.querySelector('#btn-register-fixed');
    const promoRibbon = document.querySelector('.ribbon-sticky');

    if (window.scrollY > 800) {
      btnGoUp.classList.remove('d-none');
    } else {
      btnGoUp.classList.add('d-none');
    }

    if (window.scrollY > 0) {
      promoRibbon.classList.add('position-fixed');
    } else {
      promoRibbon.classList.remove('position-fixed');
    }
  });