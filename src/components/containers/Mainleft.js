import React from 'react';
import NavLinks from '../Nav/NavLinks';
import Copyright from '../common/Copyright';
import Styles from '../../Styles/Mainleft.module.css';
import Dp from '../common/Dp';

const MainLeft = (props) => {
    return (
        <div className={Styles.MainLeft}>
            <div className={Styles.MainAdjust}>
                <section>
                    <Dp imgDivClass={Styles.imgDiv}/>
                    <p className={Styles.myDesc}>MERN stack Developer and Technical Writer</p>
                </section>
                <nav className={Styles.navSection}>
                    <NavLinks />
                </nav>
                <Copyright color="#000"/>
            </div>
        </div>
    )
}

export default MainLeft;