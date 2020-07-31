import React, { Component } from 'react';
import { Input } from 'antd';
import './css/app-search-video.css';
import AppSearchVideoChangeBlock from './css/__change-block/app-search-video__change-block.js';

const { Search } = Input;

class AppSearchVideo extends Component {

    state = {
        dataVideo: [],
        title: ''
    };

    loadData(search) {
        this.setState(() => {
            return {
                title: search
            };
        });
        fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=12&q=${search}&key=AIzaSyDTLz2YAI3Y5hcrm1vAaaGpGmx89JK4AGM`)
            .then(res => res.json())
            .then(res => {
                this.changeData(res.items);
        });
    }

    changeData(data) {
        this.props.searchData(data);
    }

    render() {
        const { title } = this.state;
        return (
            <div className="app-search-video">
                <h2 className="app-search-video__content-title">Поиск видео</h2>
                <Search
                    className="app-search-video__search"
                    placeholder="Что хотите посмотреть ?"
                    enterButton="Найти"
                    size="large"
                    onSearch={value => this.loadData(value)}
                />
                <AppSearchVideoChangeBlock title={ title }
                                           changeBlockPositionAppCard={ this.props.changeBlockPositionAppCard }
                                           changeItemPositionAppCard={ this.props.changeItemPositionAppCard }
                />
            </div>
        );
    };
}

export default AppSearchVideo;
