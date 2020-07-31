import './css/app-favorits.css';
import { List, Divider, Button } from 'antd';

import React, { Component } from 'react';
import ModalComponent from "../app-modal/app-modal";
import {NavLink} from "react-router-dom";

class Favorites extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
        dataField: ''
    };

    setModal2Visible(modal2Visible, e) {
        e.stopPropagation();
        const searchWord = e.target.textContent.substring(0, e.target.textContent.length - 9);
        const data = this.props.dataSearch.find(ele => ele.title === searchWord);
        this.setState(() => {
            return {
                dataField: data
            };
        });
        this.setState({ modal2Visible });
    }

    setModal2VisibleFalse = () => {
        this.setState({ modal2Visible: false });
    };

    searchText(e) {
        const search = e.target.closest('.favorites__item').textContent.substring(0, e.target.closest('.favorites__item').textContent.length - 9);
        this.props.searchStart(search, true, 'rating');
    }

    render() {
        const { modal2Visible, dataField } = this.state;
        const data = this.props.dataSearch.map(ele => ele.title);
        return (
            <section className="favorites">

                <Divider className="favorites__content-title" >Избранное</Divider>
                <List
                    className="favorites__list"
                    size="small"
                    bordered
                    dataSource={ data }
                    renderItem={item => <List.Item onClick={(e) => this.setModal2Visible(true, e)} className="favorites__item">{item}
                        <NavLink to="/search"><Button onClick={ (e) => this.searchText(e) } size="small" type="primary">Выполнить</Button></NavLink></List.Item>}
                />
                <ModalComponent modal2Visible={ modal2Visible } dataField={ dataField } disabledInput={ false } setModal2VisibleFalse={ this.setModal2VisibleFalse } saveDataSearch={ this.props.saveDataSearch }/>
            </section>
        )
    }
}

export default Favorites;
