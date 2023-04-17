"use client";

import React from "react";
import styles from "@/styles/components/ImagesCard.module.css";

function ImagesCard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
            <img src="/assets/imagesOverlap.png" alt="images" />
        </div>

        <div className={styles.middle}>
            <div>
                <p className={styles.title}>{props.assets}</p>
                <h5>Assets pending details</h5>
            </div>
        </div>

        <div className={styles.right}>
            <div>
                <p className={styles.link}><a href="#">View Assets</a></p>
            </div>    
        </div>

      </div>
    </>
  );
}

export default ImagesCard;
