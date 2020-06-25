import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import PostPreview from "./post-preview"

const useStyles = makeStyles(theme => ({
  posts: {
    marginBottom: theme.spacing(5),
    textAlign: "left",
  },
}))

const Posts = ({ limit = 1000 }) => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              updatedOnDate(formatString: "MMMM DD, YYYY")
              title
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
      }
    }
  `)

  return (
    <Grid container spacing={3} className={classes.posts}>
      {data.allMarkdownRemark.edges.slice(0, limit).map(({ node }) => (
        <Grid item xs={12} md={6} key={node.fields.slug}>
          <PostPreview
            slug={node.fields.slug}
            img={node.frontmatter.image}
            title={node.frontmatter.title}
            updatedOnDate={node.frontmatter.updatedOnDate}
          />
        </Grid>
      ))}
    </Grid>
  )
}

Posts.propTypes = {
  limit: PropTypes.number,
}

export default Posts
