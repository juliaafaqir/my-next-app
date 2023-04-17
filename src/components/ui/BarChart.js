import { useEffect } from "react"
import { Chart } from "chart.js";

import styles from "@/styles/components/BarChart.module.css"


function BarChart() {
    useEffect(() => {
        var ctx = document.getElementById('myBarChart').getContext('2d');
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    data: [300,210,300,400,390],
                    label: "Applied",
                    borderColor: "#009AAC",
                    backgroundColor: "#009AAC",
                    borderWidth: 1
                }
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Bar chart */}
                    <canvas className={styles.canvas} id='myBarChart'></canvas>
        </>
    )
}

export default BarChart;