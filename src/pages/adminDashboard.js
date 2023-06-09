import React from 'react'
import styles from '../styles/pages/AdminDashboard.module.css'
import AdminDetails from '../components/ui/AdminDetails'
import AccountDetails from '../components/ui/AccountDetails'
import NewDetails from '../components/ui/NewDetails'
import LineChart from '../components/ui/LineChart'
import MapCard from '../components/ui/MapCard'
import AssetsDetails from '../components/ui/AssetsDetails'
import ImagesCard from '@/components/ui/ImagesCard'
import TableCard from '@/components/ui/TableCard'
import Header from '@/components/layouts/Header'

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

  // Images card
  const pendingAssets= '+13'

  // Table 1 info:
  const title= 'Most Searched Keywords (Global - Top5)'
  const filter = 'Last month'

    // Table 2 info:
    const title2= 'Most Downloaded Assets'
    const filter2 = 'Past 6 months'


  return (
    <>
    {/* <Header /> */}
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
        <div>
        <MapCard worldwideInc={worldwideInc} domInc={domInc} date={date2}/>
        </div>
        <div className={styles.flexCardsColumn}>
          <div>
            <AssetsDetails assets={totalAssets} assetsNum={assetsNum}/>
          </div>
          <div>
          <ImagesCard assets={pendingAssets}/>
          </div>
        </div>
      </div>

      <div className={styles.flexCards}>
          <TableCard title={title} filter={filter}/>
          <TableCard title={title2} filter={filter2} />
      </div>

    </div>
    </>
  )
}
