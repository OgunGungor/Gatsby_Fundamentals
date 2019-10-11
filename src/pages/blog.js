import React from 'react'
import { graphql, useStaticQuery , Link} from 'gatsby'
import Layout from '../components/Layout/Layout.js'

//export const QUERY = graphql`deneme sorgusu ...`
//yukaridaki sorgu fonksiyonumuzun disinda ve export kullanilarak olusturulmus dolayisi ile run timeda otomatik olarak calisacak ve sorgudan donen datalar asagidaki
//BlogPage fonksiyonumuza prop olarak gelecek kullanmak icin asagidaki fonksiyon su sekilde tanimlanmali : 
//export default function BlogPage({
//   data: { rickAndMorty : {character}
//        } }) { return (<h1>{character.name}</h1>); }
//
export default function BlogPage() {
    //assagidaki sorguda kendi GRAPHQL API mize sorgu atacagiz
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                sort:{
                    fields:publishedDate
                    order:DESC
                }
            ){
                edges{
                    node{
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    const edges = data.allContentfulBlogPost.edges;

    return (
        <Layout>
            <ol>
                {
                    edges.map((one) => {
                        return (
                            <li>
                                <Link to={'/blog/'+one.node.slug}>
                                    <h2>{one.node.title}</h2>
                                    <p>{one.node.publishedDate}</p>
                                </Link>
                            </li>
                        );
                    })
                }
            </ol>
        </Layout>
    )
}
