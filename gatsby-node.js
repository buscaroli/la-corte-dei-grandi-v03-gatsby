/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    // The following log shows the type of all the files in src/
    // console.log(node.internal.type)
    console.log(node.internal)
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        // with the following command we get access on a new node in graphqlIDE
        // called 'fields'
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    // Info @ https://www.gatsbyjs.com/docs/node-apis/
    const { createPage } = actions

    // I have to:
    // 1. Get the path to the template
    // 2. Get the Markdown data
    // 3. Create the Pages

    // 1. Get the path to the template
    const blogTemplatePath =  path.resolve('./src/templates/blogDynamicPage.js')
    
    // 2. Get the Markdown data with graphql
    // NB This graphql is not the same we have used before, this is a 
    // function itself to which to pass the query and which returns a 
    // Promise!
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    // 3. Create one Page for each post

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({ 
            component: blogTemplatePath, // <- path to the component
            path: `/blog/${edge.node.fields.slug}`, //<- path to which
                                                    // the post is rendered  
            context: {  // <- stuff we can pass down to the template
                slug: edge.node.fields.slug
            } 
        })
    })
    
}