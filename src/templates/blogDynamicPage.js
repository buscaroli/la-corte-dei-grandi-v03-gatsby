import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!){
        markdownRemark(
            fields: {
                slug: {
                    eq: $slug
                }
            }
        )
        {
            frontmatter {
                title 
                 date
            }
            html
        }
    }
`

function BlogDynamicPage(props) {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
        </Layout>
    )
}

export default BlogDynamicPage