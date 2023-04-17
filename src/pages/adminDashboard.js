import React from 'react'
import styles from '../styles/pages/AdminDashboard.module.css'
import AdminDetails from '../components/ui/AdminDetails'
import AccountDetails from '../components/ui/AccountDetails'
import NewDetails from '../components/ui/NewDetails'
import LineChart from '@/components/ui/LineChart'

export default function adminDashboard() {
  //admin details card
  const name= 'Julia Faqir'
  const role= 'Admin'
  const assets= 324
  const date = new Date("2022-11-23").toISOString().split('T')[0]

  // accounts details card
  const accounts = 174
  const date2 = new Date("2022-11-23").toISOString().split('T')[0]
  const increased = '5%'

  // new details card
  const tasks= 62;
  const notifications= 13;
  const requests= 21;
  const tasksOverdue= 23;
  const notificationsOverdue= 23;

  return (
    <>
    <div className={styles.main}>
      <div>
        <AdminDetails name={name} role={role} assets={assets} date={date}/>
      </div>
      <div className={styles.flexCards}>
        <AccountDetails accounts={accounts} increased={increased} date={date2} />
        <NewDetails tasks={tasks} notifications={notifications} requests={requests} tasksOverdue={tasksOverdue} notificationsOverdue={notificationsOverdue} />
      </div>
      <div>
        <LineChart />
      </div>
    </div>
    </>
  )
}
