import React from 'react';
import './css/app-card.css';
const AppCard = ({ data }) => {
    const elements = data.map((item) => {
        const { contentTitle, subtitle, titleSale, sale, img, imgText } = item;

        return (
            <li  key={ imgText } className="app-card__item">
                <div className="app-card__container">
                    <h3 className="app-card__contentTitle">{contentTitle}</h3>
                    <p className="app-card__paragraph-subtitle">{subtitle}</p>
                    <p className="app-card__paragraph-title-sale">{titleSale}</p>
                    <p className="app-card__paragraph-sale">{sale}</p>
                </div>
                <img className="app-card__image" src={ img } alt={ imgText }/>
            </li>
        );
    });

    return (
        <ul className="app-card__list">
            { elements }
        </ul>
    );
};

export default AppCard;
