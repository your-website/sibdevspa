
import React, { Component } from 'react';

import './css/app-card.css';
import AppCardDescription from './css/__description/app-card__description.js';


class AppCard extends Component {

    render() {
        const { dataVideo, blockPosition, itemCardPosition } = this.props;

        const elements = dataVideo.map((item) => {
            const { id } = item;
            const { videoId } = id;
            const link = `https://www.youtube.com/embed/${videoId}`;

            const dataDescription = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAAzHm2B7WC2O6w8y3_8RGdWrMcVSUugV8`;

            return (
                <div key={ link } className={itemCardPosition}>
                    <iframe className="app-card__iframe" src={link} frameBorder="0"
                            allowFullScreen title={ link }/>
                            <AppCardDescription dataDescription={ dataDescription }/>
                </div>
            );
        });


        return (
            <ul className={ blockPosition }>
                { elements }
            </ul>
        );
    };
}

export default AppCard;
