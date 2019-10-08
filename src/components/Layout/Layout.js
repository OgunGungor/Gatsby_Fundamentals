import React, { Children } from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'
import '../../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>

    )
}