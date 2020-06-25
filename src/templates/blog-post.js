import React from "react"
import { graphql } from "gatsby"
import Container from "@material-ui/core/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/blog/article"
import PostsNav from "../components/blog/posts-nav"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout pageId={1}>
      <SEO title={post.frontmatter.title} />
      <Container maxWidth="sm">
        <Article post={post} />
        <PostsNav pageContext={pageContext} />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updatedOnDate(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
