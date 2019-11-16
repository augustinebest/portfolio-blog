import React from 'react';
import { Helmet } from 'react-helmet';

export default (props) => (
    <div className='App'>
    	<Helmet>
    		<title>
    			This is my first blog
    		</title>
			<meta name='author' content='Augustine Igwe' />

			<meta name="robots" content="index, follow" />
			<meta name="theme-color" content="#130327" />
			
			{/* <link rel='icon' href='https://res.cloudinary.com/dillionmegida/image/upload/v1570493725/images/website/favicon.png' /> */}

			{/* <meta property="og:image" content={props.TwitterBlogImage} /> */}
			<meta property="og:url" content="https://dillionmegida.com" />
			<meta property="og:type" content="article" />

			<script src="https://use.fontawesome.com/ec33c661f9.js"></script>
		</Helmet>
        {props.children}
    </div>
)