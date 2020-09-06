const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      projectsJson {
        projects {
          slug
        }
      }
    }
  `)

  const templateProject = path.resolve("src/templates/project.js")

  projects.data.projectsJson.projects.forEach(project => {
    createPage({
      path: `/case/${project.slug}`,
      component: templateProject,
      context: {
        slug: project.slug,
      },
    })
  })
}
