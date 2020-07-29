import './css/sidebar.css';
import AppSideBarLink from './css/__link/index';
import AppSideBarBurgerMenu from './css/__burger-menu/index';

import React, { Component } from 'react';

class AppHeader extends Component {

    burgerChange = (burger) => {
        this.props.onSearchChangeBurger(burger);
    };

    render() {
        const { data, burger } = this.props;

        return (
            <aside className="sidebar">
                <AppSideBarLink data={ data }/>
                <AppSideBarBurgerMenu burger={ burger }
                                      burgerChange={ this.burgerChange }
                />
            </aside>
        )
    }
}

export default AppHeader;
