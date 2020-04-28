import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/one.jpeg"
import Image from "gatsby-image"
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "one.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "two.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    example: file(relativePath: { eq: "three.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          src
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
        <h2>Content</h2>
      </article>
    </section>
  )
}

export default Images
