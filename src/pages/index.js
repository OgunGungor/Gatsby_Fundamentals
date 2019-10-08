import React from 'react'
import { Link } from 'gatsby'

export default function IndexPage() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>

            <h1>Home Page</h1>
            <p>Home Page</p>
        </div>
    )
}
