import React from 'react'
import Sidebar from '../sidebar'
import s from './style.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={s.container}>
            <Sidebar />
            <div className={s.content}>{children}</div>
        </div>
    )
}

export default Layout