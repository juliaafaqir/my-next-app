"use client";

import React from "react";
import styles from "@/styles/components/NewDetails.module.css";

function NewDetails(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.left}>
            <div>
                <p className={styles.title}>{props.tasks}</p>
            </div>
            <div>
                <h5>Tasks pending</h5>
                <p>{props.tasksOverdue} overdue</p>
            </div>
        </div>

        <div className={styles.middle}>
            <div>
                <p className={styles.title}>{props.notifications}</p>
            </div>
            <div>
                <h5>New Notifications</h5>
                <p>{props.notificationsOverdue} overdue</p>
            </div>
        </div>

        <div className={styles.right}>
            <div>
                <p className={styles.title}>{props.requests}</p>
            </div>
            <div>
                <h5>New Requests</h5>
                <p>Since your last login</p>
            </div>
        </div>

      </div>
    </>
  );
}

export default NewDetails;
