import React from 'react'
import s from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { createApi } from '@reduxjs/toolkit/query'

const Sidebar = () => {
    const location = useLocation();

    const routes = [
        { id: 1, href: "/", title: "Home" },
        { id: 1, href: "/licenses", title: "Licenses" },
        { id: 1, href: "/companies", title: "Companies" },
        { id: 1, href: "/users", title: "Users" },
    ]


    return (
        <div className={s.sidebar}>
            <h2 className={s.title}>
                Admin Panel
            </h2>

            <div className={s.links}>
                {
                    routes?.map(item =>
                        <Link key={item.id} to={item.href} className={`${s.link} ${location?.pathname === item.href ? s.activeLink : ""}`}>{item?.title}</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar