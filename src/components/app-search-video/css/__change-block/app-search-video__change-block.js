import React, { Component } from 'react';
import './app-search-video__change-block.css';

class AppSearchVideoChangeBlock extends Component {

    state = {
        asd: '123'
    };

    changeBlockHorizontally = () => {
        const data = 'app-card__list app-card__list_position';
        this.props.changeBlockPositionAppCard(data);
        this.changeItemHorizontally();

    };

    changeBlockVertically = () => {
        const data = 'app-card__list';
        this.props.changeBlockPositionAppCard(data);
        this.changeItemVertically();
    };

    changeItemVertically = () => {
        const data = 'app-card__item';
        this.props.changeItemPositionAppCard(data)
    };

    changeItemHorizontally = () => {
        const data = 'app-card__item app-card__item_position';
        this.props.changeItemPositionAppCard(data);
    };

    render() {
        const title = this.props.title.length > 0 ? <p className="app-search-video__content-subtitle">Видео по запросу "{ this.props.title }"</p> : null;
        console.log(this.props.changeBlockPositionAppCard)
        return (
            <div className="app-search-video__container">
                { title }
                <div className="app-search-video__change-block">
                    <svg className="app-search-video__icon" onClick={ this.changeBlockVertically } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                            <path d="M8 6H21" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12H21" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 18H21" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 6H3.01" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 12H3.01" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 18H3.01" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                    <svg className="app-search-video__icon" onClick={ this.changeBlockHorizontally } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5H5V10H10V5Z" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 5H14V10H19V5Z" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 14H14V19H19V14Z" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14H5V19H10V14Z" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        );
    };
}

export default AppSearchVideoChangeBlock;
