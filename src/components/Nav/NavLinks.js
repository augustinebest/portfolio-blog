import React from 'react';
import NavLink from './NavLink';

const NavLinks = (props) => (
    <React.Fragment>
        <div className="HideGrid">
            <div className={props.grid}>
                <div className={props.li}>
                    <NavLink href='/' title="Augustine Igwe's Blog" nav='blog' />
                </div>
                <div className={props.li}>
                    <NavLink href='/about' title="About me" nav='about' />
                </div>
                <div className={props.li}>
                    <NavLink href='/contact' title="Contact Me" nav='contact' />
                </div>
                <div className={props.li}>
                    <NavLink href='/portfolio' title="Portfolio" nav='portfolio' />
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default NavLinks;