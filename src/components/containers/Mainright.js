import React from 'react';
// import NavLink from '../Nav/NavLink';
// import Copyright from '../common/Copyright';
import Styles from '../../Styles/Mainright.module.css';

const MainRight = (props) => {
    return (
        <div className={Styles.Mainright}>
            {props.children}
        </div>
    )
}

export default MainRight;