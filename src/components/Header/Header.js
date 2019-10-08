import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyle from './header.module.scss'

export default function Header() {

    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyle.header}>
            <h1>
                <Link to="/" className={headerStyle.title}>
                    {data.site.siteMetadata.title}
            </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link to="/" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
