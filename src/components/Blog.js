import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

let Blog = (props) => (
    <Link
        to={props.href}
        title={props.title}
        style={{
            fontFamily: 'Antic'
        }}
    >
        <h3>{props.title}</h3>
        <p>{props.date} | {props.readTime && props.readTime > 1 ? `${props.readTime} mins read` : `${props.readTime} min read`}</p>
        <p>{props.excerpt}</p>
    </Link>
)


export default () => (
<StaticQuery
    query={
        graphql`
        query {
            allContentfulBlog(limit: 1000) {
                edges {
                  node {
                    id
                    title
                    slug
                    body {
                        childMarkdownRemark {
                            excerpt(pruneLength: 100)
                            timeToRead
                          }
                    }
                    date
                    image {
                      file {
                        url
                      }
                    }
                    tags
                  }
                }
              }
        }      
        `
    }
    render={data => {
        return (
            <section className='Blogs'>
                {/* Number of articles written
                    <p className='numArticles'>{data.allMarkdownRemark.totalCount} Articles Written</p>
                */}
                {
                    data.allContentfulBlog.edges.map(({ node }) => (
                        <div key={node.id} className='Blog'>
                            <Blog
                                href={node.slug}
                                title={node.title}
                                date={node.date}
                                excerpt={node.body.childMarkdownRemark.excerpt}
                                readTime={node.body.childMarkdownRemark.timeToRead}
                            />
                        </div>
                ))}
            </section>
        )
        }
    }
/>
)