import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          hello PIAIC hello PIAIC hello PIAIC hello PIAIC hello PIAIC hello
          PIAIC hello PIAIC hello PIAIC hello PIAIC hello PIAIC hello PIAIC
          hello PIAIC hello PIAIC hello PIAIC
        </p>
      </div>
    </Layout>
  )
}

export default blog
