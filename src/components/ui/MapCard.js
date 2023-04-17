"use client";

import React from "react";
import styles from "@/styles/components/MapCard.module.css";

function MapCard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
            <div>
                <p className={styles.title}>Portal Usage</p>
            </div>
            <div>
                <img src="/assets/gray-map.png" alt="map image" />
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.top}>
                <div>
                    <p className={styles.title}>{props.worldwideInc}</p>
                </div>
                <div>
                    <h5>Worldwide Increase</h5>
                    <p>Last update on {props.date}</p>
                </div>
            </div>

            <div className={styles.middle}>
                <div>
                    <p className={styles.title}>{props.domInc}</p>
                </div>
                <div>
                    <h5>Domestic Increase</h5>
                    <p>Last update on {props.date}</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <div>
                    <p className={styles.link}><a href="#">View Downloads</a></p>
                </div>               
            </div>
        </div>

      </div>
    </>
  );
}

export default MapCard;
