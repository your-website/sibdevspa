import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './css/app-search-video.css';
import AppSearchVideoChangeBlock from './css/__change-block/app-search-video__change-block.js';
import ModalComponent from '../app-modal/app-modal';

const { Search } = Input;

class AppSearchVideo extends Component {

    state = {
        dataVideo: [],
        title: '',
        modal2Visible: false,
        searchWord: 'asd',
        sort: '',
        count: 12,
        id: '1'
    };

    loadData(search) {
        this.props.searchStart(search)
    }

    changeValue(value) {
        this.setState(() => {
            return {
                searchWord: value,
                modal2Visible: false
            };
        });
    }

    setModal2Visible = () => {
        this.setState({ modal2Visible: true });
    };

    setModal2VisibleFalse = () => {
        this.setState({ modal2Visible: false });
    };


    render() {
        const { title, modal2Visible, searchWord, sort, count, id } = this.state;
        const data = { title, searchWord, sort, count, id};

        return (
            <div className="app-search-video">
                <h2 className="app-search-video__content-title">Поиск видео</h2>
                <Button onClick={ () => this.setModal2Visible() } className="app-search-video__button" type="primary">Сохранить</Button>
                <Search
                    className="app-search-video__search"
                    placeholder="Что хотите посмотреть ?"
                    enterButton="Найти"
                    size="large"
                    onSearch={value => this.loadData(value)}
                    onInput={e => this.changeValue(e.target.value) }
                />
                <AppSearchVideoChangeBlock title={ title }
                                           changeBlockPositionAppCard={ this.props.changeBlockPositionAppCard }
                                           changeItemPositionAppCard={ this.props.changeItemPositionAppCard }
                                           blockPosition={ this.props.blockPosition }
                />
                <ModalComponent modal2Visible={ modal2Visible } dataField={ data } disabledInput={ true } setModal2VisibleFalse={ this.setModal2VisibleFalse } addData={ this.props.addData }/>
            </div>
        );
    };
}

export default AppSearchVideo;
