const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const productsContainer = document.querySelector('.products');
const productCard = document.querySelectorAll('.product-card');
const cardWidth = productCard[0].offsetWidth + 20; 
const visibleCards = 4; 
const totalCards = productCard.length;
let currentPosition = 0;


const scrollLeft = () => {
  if (currentPosition > 0) {
    currentPosition -= visibleCards;
    if (currentPosition < 0) currentPosition = 0;
    productsContainer.scrollTo({
      top: 0,
      left: cardWidth * currentPosition,
      behavior: 'smooth'
    });
  }
};


const scrollRight = () => {
  if (currentPosition < totalCards - visibleCards) {
    currentPosition += visibleCards;
    if (currentPosition > totalCards - visibleCards) currentPosition = totalCards - visibleCards;
    productsContainer.scrollTo({
      top: 0,
      left: cardWidth * currentPosition,
      behavior: 'smooth'
    });
  }
};

const redirectButtons = document.querySelectorAll('.redirect-btn');

redirectButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'https://www.mercadolibre.com';
    });
});


prevBtn.addEventListener('click', scrollLeft);
nextBtn.addEventListener('click', scrollRight);
