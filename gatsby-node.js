exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allBook {
        edges {
          next {
            id
          }
          node {
            summary
            title
            id
            author {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
  })
}
