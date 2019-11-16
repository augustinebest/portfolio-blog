import React, { Component } from 'react';
import { Link } from 'gatsby';
import App from '../App';
import MainLeft from '../containers/Mainleft';
import MainRight from '../containers/Mainright';
import NavLinks from '../Nav/NavLinks';
import Dp from '../common/Dp';
import Copyright from '../common/Copyright';
import Styles from '../../Styles/Mainleft.module.css';

class Layout extends Component {
    state = {
        drawerStatus: false,
        class: 'drawerClosed'
    }
    openNavDrawer = () => {
        this.setState({
            drawerStatus: true,
            class: 'NavDrawerOpened'
        })
    }
    closeNavDrawer = () => {
        this.setState({
            drawerStatus: false,
            class: 'NavDrawerClosed'
        })
    }
    render() {
        const { drawerStatus } = this.state;
        return (
            <App
                PageTitle={this.props.PageTitle}
                PageLink={this.props.PageLink}
                PageDescription={this.props.PageDescription}
                PageKeywords={this.props.PageKeywords}
            >
                <header className='MobileNav'>
                    <Link
                        to='/'
                        title='Augustine Igwe'
                    >
                        <Dp imgDivSmall={Styles.ImgDivSmall}/>
                    </Link>
                    <h3>Augustine Igwe <span role='img' aria-label='Rocket Emoji'>&#128640;</span></h3>
                    <div class="hamburger" onClick={this.openNavDrawer} id="hamburger">
                        <div class="hamburger__content">
                            <div class="caret top"></div>
                            <div class="caret middle"></div>
                            <div class="caret bottom"></div>
                        </div>
                    </div>
                </header>
                {
                    drawerStatus ?
                    <nav className={["MobileSidebar", this.state.class].join(' ')}>
                        <p className="CloseBar" onClick={this.closeNavDrawer}><i className="fa fa-times"></i></p>
                        <NavLinks grid="grid" li="li"/>
                        <div style={{marginTop: '100px'}}>
                            <Copyright color="#fff"/>
                        </div>
                    </nav> 
                    :
                    null
                }
                <MainLeft />
                <MainRight>
                    {this.props.children}
                </MainRight>
            </App>  
        )
    }
};

export default Layout;