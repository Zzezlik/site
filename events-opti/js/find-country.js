const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.js-search-input');
const outputError = document.querySelector('.js-output-error');
const countryCardEl = document.querySelector('.js-country-card');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Страна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столица:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Население:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площадь:</strong> ${area}км<sup>2</sup></li>`;
};

const onInput = e => {
  console.log('');
  const { target } = e;

  const query = target.value.toLowerCase().trim();
  const country = countries.find(country => country.name.toLowerCase() === query);

  if (query === '') {
    outputError.textContent = '';
    countryCardEl.innerHTML = '';

    return;
  }
  if (country === undefined) {
    outputError.textContent = 'такої країни немає в списку';
    countryCardEl.innerHTML = '';

    return;
  }

  countryCardEl.innerHTML = createCountryCard(country);

  outputError.textContent = '';
};

const onThrottle = _.debounce(onInput, 250);

searchInputEl.addEventListener('input', onThrottle);
