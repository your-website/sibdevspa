import './css/header.css';


import React, { Component } from 'react';

class AppHeader extends Component {
    state = {
        term: ''
    };

    inputChange = (event) => {
        const term = event.target.value
        this.setState(() => {
            return {
                term: term
            };
        });

        this.props.onSearchChange(term);
    };


    render() {
        const { title, headerPlaceholder } = this.props;

        return (
            <div className="header__container">
                <h1 className="header__content-title">{title}</h1>
                <div className="header__container-input">
                    <svg className="header__icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.16667 9.16667C4.16667 12.8486 7.15143 15.8333 10.8333 15.8333C14.5152 15.8333 17.5 12.8486 17.5 9.16667C17.5 5.48477 14.5152 2.5 10.8333 2.5C7.15143 2.5 4.16667 5.48477 4.16667 9.16667Z"
                            stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 17.5L6.125 13.875" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <input className="header__input"
                           onChange={ this.inputChange }
                           value={ this.state.term }
                           placeholder={headerPlaceholder}
                           type="text"/>
                </div>
            </div>
        )
    }
}

export default AppHeader;
