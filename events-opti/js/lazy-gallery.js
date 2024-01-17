const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');
const galleryImgEls = document.querySelectorAll('.js-gallery__img');

const onGalleryImgClick = e => {
  e.preventDefault();

  const { target } = e;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const urlToBanner = target.dataset.bannerUrl;
  bannerImgEl.src = urlToBanner;
};

galleryEl.addEventListener('click', onGalleryImgClick);

const addSrcAttribute = () => {
  galleryImgEls.forEach(el => (el.src = el.dataset.src));
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js';
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('111');
  addSrcAttribute;
} else {
  console.log('222');
  document.append(createLazySizesScript);
}
