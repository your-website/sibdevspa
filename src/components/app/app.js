import React, { Component } from 'react';
import AppHeader from '../app-header';
import AppSideBar from  '../app-side-bar';
import AppCard from '../app-card';
import image_1 from '../../assets/image_2.png';
import image_2 from '../../assets/image_2.png';
import image_3 from '../../assets/image_3.png';
import image_4 from '../../assets/image_4.png';
import image_5 from '../../assets/image_5.png';
import image_6 from '../../assets/image_6.png';
import image_7 from '../../assets/image_7.png';
import image_8 from '../../assets/image_8.png';
import image_9 from '../../assets/image_2.png';

import '../../fonts/roboto/roboto.css';
import '../../fonts/opensans/opensans.css';

import './css/app.css';

class App extends Component {

  headerTitle = "Развлечения";
  headerPlaceholder = "Какой магазин вам нужен?";

  state = {
    term: '',
    burger: true,
    dataCard: [
      {
        contentTitle: 'ПРОБКА НА МИРА',
        subtitle: 'Бесплатный бокал пива',
        titleSale: '-50%',
        sale: 'СКИДКА',
        img: image_1,
        imgText: 'ресторан',
      },
      {
        contentTitle: 'КИНО И НЕМЦЫ',
        subtitle: 'Бесплатный бокал пива',
        titleSale: 'ВАРВАР',
        sale: 'ПРОМОКОД',
        img: image_2,
        imgText: 'ресторан1',
      },
      {
        contentTitle: 'VALERY CAKES',
        subtitle: 'Торт',
        titleSale: '50%',
        sale: 'СКИДКА',
        img: image_3,
        imgText: 'ресторан2',
      },
      {
        contentTitle: 'SUSHI SELL',
        subtitle: 'Набор "Праздник"',
        titleSale: '45%',
        sale: 'СКИДКА',
        img: image_4,
        imgText: 'ресторан3',
      },
      {
        contentTitle: 'MANGOSTEEN',
        subtitle: 'Фрукт в подарок',
        titleSale: 'J130',
        sale: 'КУПОН',
        img: image_5,
        imgText: 'ресторан4',
      },
      {
        contentTitle: 'ТЕЛЕНОК ТАБАКА',
        subtitle: 'Стейк "Мачете"',
        titleSale: '20%',
        sale: 'СКИДКА',
        img: image_6,
        imgText: 'ресторан5',
      },
      {
        contentTitle: 'FIRE FOOD',
        subtitle: 'Вторая шаурма в подарок',
        titleSale: 'ОГОНЬ',
        sale: 'ПРОМОКОД',
        img: image_7,
        imgText: 'ресторан6',
      },
      {
        contentTitle: 'Пробка на мира',
        subtitle: 'Вечер для двоих',
        titleSale: '-50%',
        sale: 'СКИДКА',
        img: image_8,
        imgText: 'ресторан7',
      },
      {
        contentTitle: 'AROMA CREMERIA',
        subtitle: 'Джелато "Пармезан"',
        titleSale: '20%',
        sale: 'СКИДКА',
        img: image_9,
        imgText: 'ресторан8',
      },
      {
        contentTitle: 'КИНО И НЕМЦЫ',
        subtitle: 'Бесплатный бокал пива',
        titleSale: 'ВАРВАР',
        sale: 'ПРОМОКОД',
        img: image_2,
        imgText: 'ресторан9',
      },
      {
        contentTitle: 'VALERY CAKES',
        subtitle: 'Торт',
        titleSale: '50%',
        sale: 'СКИДКА',
        img: image_3,
        imgText: 'ресторан10',
      },
      {
        contentTitle: 'SUSHI SELL',
        subtitle: 'Набор "Праздник"',
        titleSale: '45%',
        sale: 'СКИДКА',
        img: image_4,
        imgText: 'ресторан11',
      },
    ],
    dataSideBar: [
      {
        img: <svg className="app-side-bar__logo"  viewBox="0 0 121 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M24.9618 49.9615C38.7478 49.9615 49.9236 38.7858 49.9236 24.9997C49.9236 11.2137 38.7478 0.0379028 24.9618 0.0379028C11.1758 0.0379028 0 11.2137 0 24.9997C0 38.7858 11.1758 49.9615 24.9618 49.9615Z" fill="#34ABE0"/>
            <path d="M50 25.0003C50 28.6559 49.2145 32.1281 47.8024 35.257C44.3363 42.9381 37.0953 48.5509 28.4443 49.7307C27.5233 49.8571 26.5859 49.9325 25.6364 49.9549C25.4377 49.9599 25.238 49.962 25.0383 49.962C15.886 49.962 7.885 45.0369 3.53959 37.693C3.13412 37.0063 2.75912 36.2993 2.41889 35.5728C1.99096 34.6569 1.61606 33.7114 1.29916 32.7383L33.9991 0.0384521L34.1305 1.74607L34.3709 4.85144L39.185 5.22537L39.5589 10.0385L44.372 10.4124L44.7459 15.2264L48.1234 15.4883C49.3327 18.4205 50 21.6319 50 25.0003Z" fill="#F9EED7"/>
            <path d="M50 25.0003C50 28.6559 49.2144 32.1281 47.8023 35.257L23.2918 10.7455L33.999 0.0384521L34.1304 1.74607L34.3708 4.85144L39.1849 5.22537L39.5588 10.0385L44.3719 10.4124L44.7459 15.2264L48.1233 15.4883C49.3326 18.4205 50 21.6319 50 25.0003Z" fill="#FF525D"/>
            <path d="M34.8375 37.3996L32.2374 34.7995C30.4238 32.9859 28.5552 33.5351 27.0168 35.0735C25.461 36.6304 24.9292 38.4806 26.7427 40.2931L29.3428 42.8941C31.1564 44.7066 33.0066 44.1759 34.5624 42.619C36.1008 41.0808 36.651 39.2132 34.8375 37.3996ZM32.9699 41.0257C32.4013 41.5942 31.7972 41.6482 31.193 41.044L28.592 38.4439C27.9878 37.8397 28.0428 37.2346 28.6103 36.6671C29.1789 36.0996 29.8013 36.0263 30.4055 36.6304L33.0066 39.2314C33.6108 39.8357 33.5374 40.4582 32.9699 41.0257ZM28.3912 49.4506L21.6332 29.799C21.5782 29.6349 21.4681 29.4883 21.3581 29.3782C20.7722 28.7924 19.8196 28.9748 19.3071 29.4883C18.977 29.8174 18.8313 30.2575 18.9953 30.7149L25.6361 49.9549C26.5857 49.9324 27.523 49.857 28.444 49.7308C28.4411 49.633 28.4238 49.5392 28.3912 49.4506ZM20.5338 39.9091L17.9337 37.308C16.1202 35.4955 14.2527 36.0446 12.7142 37.5831C11.1574 39.1399 10.6266 40.9892 12.4391 42.8026L15.0402 45.4027C16.8527 47.2163 18.703 46.6854 20.2597 45.1287C21.7982 43.5901 22.3474 41.7216 20.5338 39.9091ZM18.6663 43.5351C18.0988 44.1026 17.4936 44.1577 16.8894 43.5535L14.2893 40.9524C13.6841 40.3482 13.7391 39.744 14.3077 39.1766C14.8751 38.6091 15.4977 38.5357 16.1019 39.1398L18.703 41.7399C19.3072 42.3441 19.2337 42.9677 18.6663 43.5351Z" fill="#FFD15C"/>
          </g>
          <path d="M67.152 25.288C67.7493 25.3947 68.256 25.7093 68.672 26.232C69.088 26.7547 69.296 27.3467 69.296 28.008C69.296 28.5733 69.1467 29.0853 68.848 29.544C68.56 29.992 68.1387 30.3493 67.584 30.616C67.0293 30.872 66.384 31 65.648 31H61.2V19.88H65.44C66.1973 19.88 66.848 20.008 67.392 20.264C67.936 20.52 68.3467 20.8667 68.624 21.304C68.9013 21.7307 69.04 22.2107 69.04 22.744C69.04 23.384 68.8693 23.9173 68.528 24.344C68.1867 24.7707 67.728 25.0853 67.152 25.288ZM63.024 24.552H65.28C65.8773 24.552 66.3413 24.4187 66.672 24.152C67.0133 23.8747 67.184 23.48 67.184 22.968C67.184 22.4667 67.0133 22.0773 66.672 21.8C66.3413 21.512 65.8773 21.368 65.28 21.368H63.024V24.552ZM65.488 29.512C66.1067 29.512 66.592 29.3627 66.944 29.064C67.296 28.7653 67.472 28.3493 67.472 27.816C67.472 27.272 67.2853 26.84 66.912 26.52C66.5387 26.2 66.0427 26.04 65.424 26.04H63.024V29.512H65.488ZM73.1021 21.352V24.616H76.9421V26.104H73.1021V29.512H77.4221V31H71.2781V19.864H77.4221V21.352H73.1021ZM79.0608 25.416C79.0608 24.328 79.3114 23.352 79.8128 22.488C80.3248 21.624 81.0128 20.952 81.8768 20.472C82.7514 19.9813 83.7061 19.736 84.7408 19.736C85.9248 19.736 86.9754 20.0293 87.8928 20.616C88.8208 21.192 89.4928 22.0133 89.9088 23.08H87.7168C87.4288 22.4933 87.0288 22.056 86.5168 21.768C86.0048 21.48 85.4128 21.336 84.7408 21.336C84.0048 21.336 83.3488 21.5013 82.7728 21.832C82.1968 22.1627 81.7434 22.6373 81.4128 23.256C81.0928 23.8747 80.9328 24.5947 80.9328 25.416C80.9328 26.2373 81.0928 26.9573 81.4128 27.576C81.7434 28.1947 82.1968 28.6747 82.7728 29.016C83.3488 29.3467 84.0048 29.512 84.7408 29.512C85.4128 29.512 86.0048 29.368 86.5168 29.08C87.0288 28.792 87.4288 28.3547 87.7168 27.768H89.9088C89.4928 28.8347 88.8208 29.656 87.8928 30.232C86.9754 30.808 85.9248 31.096 84.7408 31.096C83.6954 31.096 82.7408 30.856 81.8768 30.376C81.0128 29.8853 80.3248 29.208 79.8128 28.344C79.3114 27.48 79.0608 26.504 79.0608 25.416ZM97.1158 31.112C96.0811 31.112 95.1264 30.872 94.2518 30.392C93.3878 29.9013 92.6998 29.224 92.1878 28.36C91.6864 27.4853 91.4358 26.504 91.4358 25.416C91.4358 24.328 91.6864 23.352 92.1878 22.488C92.6998 21.624 93.3878 20.952 94.2518 20.472C95.1264 19.9813 96.0811 19.736 97.1158 19.736C98.1611 19.736 99.1158 19.9813 99.9798 20.472C100.854 20.952 101.542 21.624 102.044 22.488C102.545 23.352 102.796 24.328 102.796 25.416C102.796 26.504 102.545 27.4853 102.044 28.36C101.542 29.224 100.854 29.9013 99.9798 30.392C99.1158 30.872 98.1611 31.112 97.1158 31.112ZM97.1158 29.528C97.8518 29.528 98.5078 29.3627 99.0838 29.032C99.6598 28.6907 100.108 28.2107 100.428 27.592C100.758 26.9627 100.924 26.2373 100.924 25.416C100.924 24.5947 100.758 23.8747 100.428 23.256C100.108 22.6373 99.6598 22.1627 99.0838 21.832C98.5078 21.5013 97.8518 21.336 97.1158 21.336C96.3798 21.336 95.7238 21.5013 95.1478 21.832C94.5718 22.1627 94.1184 22.6373 93.7878 23.256C93.4678 23.8747 93.3078 24.5947 93.3078 25.416C93.3078 26.2373 93.4678 26.9627 93.7878 27.592C94.1184 28.2107 94.5718 28.6907 95.1478 29.032C95.7238 29.3627 96.3798 29.528 97.1158 29.528Z" fill="#333333"/>
          <defs>
            <clipPath id="clip0">
              <rect width="50" height="50" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      },
      {
        name: 'Каталог',
        img: <svg className="app-side-bar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path className="app-side-bar__icon-path" d="M10 3H3V10H10V3Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M21 3H14V10H21V3Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M21 14H14V21H21V14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M10 14H3V21H10V14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '</svg>
      },
      {
        name: 'Здоровье',
        img: <svg className="app-side-bar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path className="app-side-bar__icon-path" d="M22 12H18L15 21L9 3L6 12H2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '</svg>
      },
      {
        name: 'Красота',
        img: <svg className="app-side-bar__icon" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path className="app-side-bar__icon-path" d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.9083 2.5783 8.50903 1.9987 7.05 1.9987C5.59096 1.9987 4.19169 2.5783 3.16 3.60999C2.1283 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '</svg>
      },
      {
        name: 'Развлечения ',
        img: <svg className="app-side-bar__icon" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path className="app-side-bar__icon-path" d="M15 23V19.13C15.0375 18.6532 14.9731 18.1738 14.811 17.7238C14.6489 17.2738 14.3929 16.8634 14.06 16.52C17.2 16.17 20.5 14.98 20.5 9.52C20.4997 8.12383 19.9627 6.7812 19 5.77C19.4559 4.54851 19.4236 3.19835 18.91 2C18.91 2 17.73 1.65 15 3.48C12.708 2.85882 10.292 2.85882 8 3.48C5.27 1.65 4.09 2 4.09 2C3.57638 3.19835 3.54414 4.54851 4 5.77C3.03013 6.7887 2.49252 8.14346 2.5 9.55C2.5 14.97 5.8 16.16 8.94 16.55C8.611 16.89 8.35726 17.2954 8.19531 17.7399C8.03335 18.1844 7.96681 18.6581 8 19.13V23M8 20C3 21.5 3 17.5 1 17L8 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '</svg>
      },
      {
        name: 'Авто ',
        img: <svg className="app-side-bar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path className="app-side-bar__icon-path" d="M16 3H1V16H16V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M16 8H20L23 11V16H16V8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '<path className="app-side-bar__icon-path" d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>\n' +
          '</svg>
      }
    ]
  };

  updateDimensions() {
    const sideBar = document.querySelector('.sidebar');
    if (window.innerWidth > 768) {
      sideBar.style.width = '240px';
    } else {
      sideBar.style.width = '100px';
    }

    if (window.innerWidth > 470) {
      sideBar.style.transform = 'translateX(0)'
    } else {
      sideBar.style.transform = 'translateX(-95px)'
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onSearchChangeBurger = (burger) => {
    this.setState({ burger });
  };

  searchTodo = (items, term) => {
    if (term === '') {
      return items;
    };

    return items.filter((item) => {
      return item.contentTitle.toLowerCase().includes(term.toLowerCase());
    });

  };

  render() {

    const { term, dataCard, dataSideBar, burger } = this.state;

    const visibleItems = this.searchTodo(dataCard, term);

    return (
      <div className="app">
        <div className="app__container-sidebar">
          <AppSideBar data={ dataSideBar }
                      burger={ burger }
                      onSearchChangeBurger={ this.onSearchChangeBurger }
          />
        </div>
        <div className="app__container-page">
          <AppHeader className="header"
                     title={ this.headerTitle }
                     headerPlaceholder={ this.headerPlaceholder }
                     term={ term }
                     onSearchChange={ this.onSearchChange }
          />
          <main className="main">
            <AppCard data={ visibleItems }/>
          </main>
        </div>
      </div>
    );
  };
};

export default App;
