import React from "react"
import Navbar from "./Navbar"
import Foorter from "./Foorter"
import "./layout.css"
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Foorter />
    </>
  )
}

export default layout
