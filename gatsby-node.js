const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectPost = path.resolve('./src/templates/project-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const projectPosts = result.data.allContentfulProject.edges
        projectPosts.forEach((post, index) => {
          createPage({
            path: `/project/${post.node.slug}/`,
            component: projectPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}