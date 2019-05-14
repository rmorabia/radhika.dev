import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <h1 className={styles.heading}>
      {`Hi, I'm`} <div className={styles.rainbowBackground}><span className={styles.name}>Radhika Morabia</span></div>.
    </h1>
    <p>I'm a Software Engineer based in Oakland, CA. I'm interested in full-stack web development & data engineering.</p>
    <p>Currently, I focus on full-stack JavaScript <i>(and all the drama that entails)</i>. I'm also learning Python. Down the line, I'm hoping to gain a good understanding of Java and CS fundamentals. <a href="http://radhika.dev/blog">Read about what I'm learning on my blog.</a> Usually updated weekly.</p>
    <p>The best way to keep up with what I'm doing is to subscribe to my newsletter below. I write about my journey in the tech industry and sprinkle in some useful advice.</p>
    {/* <form action="https://tinyletter.com/rmorabia" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/rmorabia', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <input type="text" name="email" id="tlemail" placeholder="hi@whatever.com"></input> */}
    </form>
    {/* <form action="https://tinyletter.com/rmorabia" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/rmorabia', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <p>
        <label for="tlemail">Enter your email address</label>
      </p>
      <p>
        <input type="text" style="width:140px" name="email" id="tlemail" />
      </p>
      <p>
        <input type="hidden" value="1" name="embed"/>
        <input type="submit" value="Subscribe" />
      <p>
    </form> */}
    <p>If you want to keep up with a less polished version of me, I'm pretty active on Twitter at <a href="http://twitter.com/radhikamorabia">@radhikamorabia</a>.</p>
    <p><i>(Psst! If you're not here for developer stuff, check out my personal site: <a href="http://rmorabia.com">rmorabia.com</a>.)</i></p>

  </Layout>
)