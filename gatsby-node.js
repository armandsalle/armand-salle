const path = require("path")
const fs = require("fs")
const dir = "./.cache/json/"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

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
      path: `/cases/${project.slug}`,
      component: templateProject,
      context: {
        slug: project.slug,
      },
    })
  })
}
