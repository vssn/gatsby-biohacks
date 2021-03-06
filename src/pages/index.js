import React from "react"
import { cards } from "./../../content"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bunch of Biohacks" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {cards.map(card => (
        <Card key={Math.random()} {...card} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
