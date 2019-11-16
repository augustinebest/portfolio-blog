import React, { Fragment } from 'react';

const Copyright = props => {
    return(
        <Fragment>
            <p style={{margin: '60px auto auto auto', textAlign: 'center', width: '230px', color: props.color}}>
                <span style={{display: 'flex', justifyContent: 'space-between', width: '100px', fontSize: '20px', margin: '30px auto 0'}}>
                    <a style={{color: props.color}} href='https://twitter.com/augustinebest_' title='Twitter Profile'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a style={{color: props.color}} href='https://github.com/augustinebest' title='Github Profile'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a style={{color: props.color}} href='https://www.facebook.com/augustinebest' title='Facebook Profile'>
                        <i className='fa fa-medium'></i>
                    </a>
                    <a style={{color: props.color}} href='https://www.linkedin.com/' title='LinkedIn Profile'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                </span>
                <br/>
                <span style={{fontSize: '18px'}}>
                    &copy; {new Date().getFullYear()}
                </span><br /><br />
            </p>
        </Fragment>
    )
}

export default Copyright;