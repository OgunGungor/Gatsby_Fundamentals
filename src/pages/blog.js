import React from 'react'
import { graphql, useStaticQuery , Link} from 'gatsby'
import Layout from '../components/Layout/Layout.js'

export default function BlogPage() {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)

    const edges = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <ol>
                {
                    edges.map((one) => {
                        return (
                            <li>
                                <Link to={'/blog/'+one.node.fields.slug}>
                                    <h2>{one.node.frontmatter.title}</h2>
                                    <p>{one.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        );
                    })
                }
            </ol>
        </Layout>
    )
}
