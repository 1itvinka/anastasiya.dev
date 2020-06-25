import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import MainInfo from "../components/home/main-info"
import HomePosts from "../components/home/home-posts"

export default function HomePage() {
  return (
    <Layout pageId={0}>
      <SEO title="Home" />
      <MainInfo />
      <HomePosts />
    </Layout>
  )
}
