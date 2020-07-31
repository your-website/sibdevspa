import './css/app-modal.css';
import { Input, Slider } from 'antd';
import { Modal, Select } from 'antd';
import React, { Component } from 'react';
const { Option } = Select;

class ModalComponent extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
        enterOk: true,
        searchWord: '',
        title: '',
        sort: '',
        count: 1,
        id: 1
    };

    componentWillReceiveProps(nextProps, prevProps) {
        this.setState({ modal2Visible: this.props.modal2Visible });
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    componentDidMount() {
        const { disabledInput } = this.props;
        if (!disabledInput) {
            this.setState({ enterOk: false });
        } else {
            this.setState({ enterOk: true });
        }
    }

    setModal2Visible() {
        this.props.setModal2VisibleFalse();
    }
    saveData() {
        this.props.setModal2VisibleFalse();

        const { dataField, disabledInput } = this.props;
        const { searchWord, title, sort, count } = this.state;
        if (disabledInput) {
            this.props.addData(searchWord === '' ? dataField.searchWord : searchWord,
                title === '' ? dataField.title : title,
                sort === '' ? dataField.sort : sort,
                count === '' ? dataField.count : count, dataField.id)
        } else {
            this.props.saveDataSearch(searchWord === '' ? dataField.searchWord : searchWord,
                title === '' ? dataField.title : title,
                sort === '' ? dataField.sort : sort,
                count === '' ? dataField.count : count, dataField.id)
        }
    }

    validateInput(value) {
        const { disabledInput } = this.props;
        if (disabledInput) {
            if (value !== '') {
                this.setState({ enterOk: false });
            } else {
                this.setState({ enterOk: true });
            }
        }
    }

    setSearchWord(value) {
        this.setState({ searchWord: value})
    }
    setTitle(value) {
        this.setState({ title: value})

    }
    setSort(value) {
        this.setState({ sort: value})

    }
    setCount(value) {
        this.setState({ count: value})
    }

    render() {
        const { dataField, disabledInput } = this.props;
        const { enterOk } = this.state;
        const modalInputRequest = disabledInput ? <Input className="modal__input" placeholder={ dataField.searchWord } disabled/> : <Input className="modal__input" placeholder={ dataField.searchWord } onChange={(e) =>  this.setSearchWord(e.target.value) } defaultValue={ dataField.searchWord }/>;

        return (
            <Modal
                destroyOnClose={true}
                className="favorites__modal"
                title="Изменить запрос"
                centered
                visible={this.props.modal2Visible}
                okButtonProps={{ disabled: enterOk }}
                onOk={() => this.saveData()}
                onCancel={() => this.setModal2Visible(false)}
            >
                <p className="modal__paragraph">Запрос</p>
                { modalInputRequest }

                <p className="modal__paragraph">Название</p>
                <Input className="modal__input" defaultValue={dataField.title} onChange={(e) => this.setTitle(e.target.value) } onInput={e => this.validateInput(e.target.value)} placeholder={ dataField.title }/>

                <p className="modal__paragraph">Сортировать по</p>
                <Select defaultValue={dataField.sort} style={{ width: 120 }} onChange={(value) => this.setSort(value) }>
                    <Option value="searchSortUnspecified">searchSortUnspecified</Option>
                    <Option value="date">date</Option>
                    <Option value="rating">rating</Option>
                    <Option value="viewCount">viewCount</Option>
                    <Option value="relevance">relevance</Option>
                    <Option value="title">title</Option>
                    <Option value="videoCount">videoCount</Option>
                </Select>

                <p className="modal__paragraph">Максимальное количество</p>
                <Slider className="modal__slider" onChange={(value) =>  this.setCount(value) } defaultValue={ dataField.count } tooltipVisible max="50"/>
            </Modal>
        )
    }
}

export default ModalComponent;
