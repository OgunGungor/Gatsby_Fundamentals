const path = require('path')

// module.exports.onCreateNode = ({node , actions}) => {
//     const { createNodeField } = actions;

//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath ,'.md');
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         });
//     }    
// }

module.exports.createPages = async ( {graphql , actions} ) => {
    
    const { createPage } = actions;
    
    //get path to template
    const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
    //get markdown data  gatsby-source-graphql plugini ile kendi GRAPHQL API mize erisip orada slugumuza sorgu atacaz.
    //slug ismimizi ise blog linkinin ne olmasini istiyorsak ona gore verecegiz
    const response = await graphql(`
        query{
            allContentfulBlogPost{
              edges{
                node{
                  slug
                }
              }
            }   
          }
    `)
    //create new pages
    response.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogPostTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });

}