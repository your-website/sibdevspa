
import React, { Component } from 'react';
import './css/app-card__description.css';

class AppCardDescription extends Component {

    state = {
        title: '',
        statistics: ''
    };

    componentDidMount() {
        fetch(this.props.dataDescription)
            .then(res => res.json())
            .then(res => {
                if (res.items[0].snippet !== undefined) {
                    this.setState(() => {
                        return {
                            title: res.items[0].snippet.title
                        };
                    });
                    this.setState(() => {
                        return {
                            statistics: res.items[0].statistics.viewCount
                        };
                    });
                }
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="app-card__description">
                <p className="app-card__paragraph">{ this.state.title }</p>
                <p className="app-card__paragraph">{ this.state.statistics } просмотров</p>
            </div>
        );
    };
}

export default AppCardDescription;
