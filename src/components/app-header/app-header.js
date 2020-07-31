import './css/header.css';
import { Menu } from 'antd';

import React, { Component } from 'react';

class AppHeader extends Component {
    state = {
        current: 'mail',
    };

    render() {
        const { SubMenu } = Menu;
        const { current } = this.state;

        return (
            <div className="header">
                <nav className="header__navigation">
                    <svg className="header__logo" width="48" height="48" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M59.1488 43.5667L24.683 60.9559V79.399L59.1488 62.0098V43.5667Z" fill="#1390E5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z" fill="#1180CB"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M59.1488 8.79071L24.683 26.1799V44.623L59.1488 27.2338V8.79071Z" fill="#35A2EC"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="88" height="88" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <Menu className="header__menu" selectedKeys={[current]} mode="horizontal">
                        <Menu.Item >
                            <a className="header__link" href="#" rel="noopener noreferrer">
                                Поиск
                            </a>
                        </Menu.Item>
                        <Menu.Item >
                            <a className="header__link" href="#" rel="noopener noreferrer">
                                Избраннное
                            </a>
                        </Menu.Item>
                    </Menu>
                    <Menu className="header__menu header__menu_position" selectedKeys={[current]} mode="horizontal">
                        <Menu.Item>
                            <a className="header__link" href="#" rel="noopener noreferrer">
                                Выйти
                            </a>
                        </Menu.Item>
                    </Menu>
                </nav>
            </div>
        )
    }
}

export default AppHeader;
