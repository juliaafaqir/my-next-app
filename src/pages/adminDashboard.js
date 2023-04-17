import React from 'react'
import styles from '../styles/pages/AdminDashboard.module.css'
import AdminDetails from '../components/ui/AdminDetails'
import AccountDetails from '../components/ui/AccountDetails'
import NewDetails from '../components/ui/NewDetails'
import LineChart from '../components/ui/LineChart'
import MapCard from '../components/ui/MapCard'
import AssetsDetails from '../components/ui/AssetsDetails'

export default function adminDashboard() {
  //admin details card
  const name= 'Julia Faqir'
  const role= 'Admin'
  const newAssets= 324
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

  // map card details
  const worldwideInc= "2%";
  const domInc = "8%";

  // Assets details
  const totalAssets= 13458;
  const assetsNum = 2870;

  return (
    <>
    <div className={styles.main}>
      <div>
        <AdminDetails name={name} role={role} assets={newAssets} date={date}/>
      </div>
      <div className={styles.flexCards}>
        <AccountDetails accounts={accounts} increased={increased} date={date2} />
        <NewDetails tasks={tasks} notifications={notifications} requests={requests} tasksOverdue={tasksOverdue} notificationsOverdue={notificationsOverdue} />
      </div>
      <div>
        <LineChart />
      </div>
      <div className={styles.flexCards}>
        <MapCard worldwideInc={worldwideInc} domInc={domInc} date={date2}/>
        <AssetsDetails assets={totalAssets} assetsNum={assetsNum}/>
      </div>
    </div>
    </>
  )
}
