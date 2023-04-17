import React from 'react'
import styles from '@/styles/components/layouts/Header.module.css'

function Header() {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.left}>
                <div>
                    <img src="/assets/menu.svg" alt="" />
                </div>
                <div>
                    <img src="/assets/logo.svg" alt="" />
                </div>
            </div>

            <div className={styles.middle}>
                <nav>
                    <ul>
                        <li>Tasks</li>
                        <li>Manage Assets</li>
                        <li>Manage Users</li>
                        <li>Manage Support Requests</li>
                        <li>Contact</li>
                    </ul>

                </nav>
            </div>

            <div className={styles.right}>
                <button>
                Hi, Julia!
                </button>
                <img src="/assets/dp.jpeg" alt="" width="40px"/>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Header
