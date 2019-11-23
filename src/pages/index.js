import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Bunch of Biohacks" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Card
        category="Pendeln"
        title="Podcast Folge Deutschlandfunk"
        short="Eine Folge Deutschlandfunk 'Der Hintergrund' hat ca. 20 Minuten Laufzeit. Perfekt für den Weg zur Arbeit."
        effort="1"
        gain="2"
      />
      <Card
        category="Pendeln"
        title="Sprache lernen mit Memrise"
        short="Mit den Öffis auf dem Weg zur Arbeit oder nach Hause? Dann hängst du wohl eh am Smartphone. Nutze die Zeit um die Sprachkenntnisse zu erweitern."
        effort="2"
        gain="4"
      />
    </div>
  </Layout>
)

export default IndexPage
