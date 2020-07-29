import './sidebar__burger-menu.css';

import React, { Component } from 'react';

class AppSideBarBurgerMenu extends Component {
    state = {
        burger: ''
    };

    burgerChange = () => {
        const burger = !this.props.burger;
        this.setState(() => {
            return {
                burger: burger
            };
        });

        this.props.burgerChange(burger);

        const linkOpacity = document.querySelectorAll('.sidebar__link-opacity');
        const link = document.querySelectorAll('.sidebar__link');
        const sideBar = document.querySelector('.sidebar');

        if (burger === false) {
            if (document.body.clientWidth < 470) {
                sideBar.style.transform = 'translateX(0)'
            }
            sideBar.style.width = '246px';
            setTimeout(() => {  this.changeVisible(linkOpacity, 'none'); }, 250);
            setTimeout(() => {  this.changeVisible(link, 'block'); }, 250);

        } else {
            if (window.innerWidth < 470) {
                sideBar.style.transform = 'translateX(-95px)';
            }
            sideBar.style.width = '104px';
            this.changeVisible(linkOpacity, 'block');
            this.changeVisible(link, 'none');
        }
    };

    changeVisible = (data, style) => {
        data.forEach(element => {
            element.style.display = style;
        });
    };

    render() {

        const { burger } = this.props;

        if (burger === false) {
            return (
                <div onClick={ this.burgerChange } className="sidebar__burger-menu">
                    <div className="sidebar__burger-menu-line sidebar__burger-menu-line_one-close"></div>
                    <div className="sidebar__burger-menu-line sidebar__burger-menu-line_three-close"></div>
                </div>
            )
        } else
        return (
            <div onClick={ this.burgerChange } className="sidebar__burger-menu">
                <div className="sidebar__burger-menu-line sidebar__burger-menu-line_one-open"></div>
                <div className="sidebar__burger-menu-line sidebar__burger-menu-line_two-open"></div>
                <div className="sidebar__burger-menu-line sidebar__burger-menu-line_three-open"></div>
            </div>
        )
    }
}

export default AppSideBarBurgerMenu;
