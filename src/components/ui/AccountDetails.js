"use client";

import React from "react";
import styles from "@/styles/components/AccountDetails.module.css";

function AccountDetails(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
            <div>
                <p className={styles.title}>{props.accounts}</p>
            </div>
            <div>
                <h5>New Accounts Created</h5>
                <p>Last update on {props.date}</p>
            </div>
        </div>

        <div className={styles.right}>
            <div>
                <p className={styles.title}>{props.increased}</p>
            </div>
            <div>
                <h5>Increased Pageviews</h5>
                <p>Last update on {props.date}</p>
            </div>
        </div>

      </div>
    </>
  );
}

export default AccountDetails;
