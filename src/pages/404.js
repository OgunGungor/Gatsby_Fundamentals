import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const NotFound = () => {
    return(
        <Layout headTitle = "Opps">
            <h1>Page Not Found</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound;