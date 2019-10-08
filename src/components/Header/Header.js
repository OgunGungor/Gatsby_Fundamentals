import React from 'react'
import { Link } from 'gatsby'
import headerStyle from './header.module.scss'

export default function Header() {
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link to="/" className={headerStyle.title}>
                    Ogun Gungor
            </Link>
            </h1>
            <nav>
                <ul className = {headerStyle.navList}>
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
