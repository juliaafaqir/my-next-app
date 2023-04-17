"use client";

import { useEffect } from "react"
import { Chart } from "chart.js";

import styles from "@/styles/components/LineChart.module.css"

function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022", "Sep 2022", "Oct 2022 ", "Nov 2022", "Dec 2022"],
        datasets: [{
          data: [`20K`, 20, 0, 45, 25, 79, 30, 79.8,42],
          label: "Applied",
          borderColor: "#56B0CB",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, 
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className={styles.card}>      
        <h2>Portal Traffic (Per Month)</h2>
        <canvas className={styles.canvas} id='myChart'></canvas>
      </div>
    </>
  )
}

export default LineChart;