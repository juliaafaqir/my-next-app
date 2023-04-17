"use client";

import React from "react";
import styles from "@/styles/components/AssetsDetails.module.css";
import BarChart from './BarChart'

function AssetsDetails(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
            <div>
                <p className={styles.title}>Your Assets</p>
            </div>
            <div className={styles.line}>
                <h5>{props.assets}</h5><p>Total Assets on Portal</p>
            </div>
            <div>
                <BarChart />
            </div>
        </div>

        <div className={styles.middle}>
            <div>
                <p className={styles.title}>{props.notifications}</p>
            </div>
            <div>
                <h5>{props.assetsNum}</h5>
                <p>Uploaded to Date</p>
            </div>
        </div>

        <div className={styles.right}>
            <div>
                <img src="/assets/uploadIcon.svg" alt="" />
            </div>
            <div>
                <h5>Drag and drop your files here <br /> or</h5>
            </div>
            <div>
                <button>Browse</button>
            </div>
        </div>

      </div>
    </>
  );
}

export default AssetsDetails;
