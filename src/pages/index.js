import React from "react";
import Layout from '../components/Layout/Layout';
import Blog from '../components/Blog';

let Index = () => {
  return (
    <Layout 
      PageTitle='Augustine Igwe &#128640; - Technical Writer and Front End Developer'
      PageLink='/'
      PageDescription='Augustine is a front end developer, a technical writer and  aspiring speaker.'
      PageKeywords='augustine igwe, developer, augustine, igwe, web developer, developer, frontend, web development, javascript'
      TwitterCardTtitle='Augustine Igwe'
    >
      <Blog />
    </Layout>
  )
}

export default Index;