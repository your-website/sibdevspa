import React from 'react';

const AppSideBarLink = ({ data }) => {
    const elements = data.map((item) => {
        const { name, img } = item;
        const i = 1;
        if (name === undefined) {
            return (
                <li  key={ i + 1 } className="sidebar__element">
                    <a href="#" className="sidebar__logo">
                        { img }
                    </a>
                </li>
            );
        } else
        return (
            <li  key={ name } className="sidebar__element">
                <a href="#" className="sidebar__link">
                    { img }
                    { name ? name : null }
                </a>
                <a href="#" className="sidebar__link-opacity">
                    { img }
                </a>
            </li>
        );
    });

    return (
        <ul className="sidebar__list">
            { elements }
        </ul>
    );
};

export default AppSideBarLink;
