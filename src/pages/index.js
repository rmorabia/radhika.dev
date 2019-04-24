import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <h1 className={styles.heading}>
      {`Hi, I'm`} <div className={styles.rainbowBackground}><span className={styles.name}>Radhika Morabia</span></div>.
    </h1>
    <div class={styles.bitter}></div>
  </Layout>
)
