"use client";

import React from "react";
import styles from "@/styles/components/AdminDetails.module.css";

function AdminDetails(props) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <h2>{props.name}</h2>
          <h5>{props.role}</h5>
        </div>
        <div>
          <p>
            Your users added <a href="#">{props.assets} new assets</a> since
            your last login on {props.date}
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminDetails;
