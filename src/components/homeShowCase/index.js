import React from "react"
import ProjectThumb from "../projectThumb"
import CustomLink from "../customLink"

const HomeShowCase = ({ projects }) => {
  return (
    <section className="showcase">
      <div className="showcase__left">
        <div className="p-info">
          Last projects <span className="p-number">03</span>
        </div>

        <div className="showcase__projects_wrapper">
          {projects.map(
            project =>
              project.isOnHome && (
                <ProjectThumb
                  key={project.id}
                  title={project.title}
                  thumbnail={project.thumbnail.publicURL}
                />
              )
          )}
        </div>
      </div>

      <div className="sticky-link">
        <CustomLink to="/about" text="View" textLink="all cases" />
      </div>
    </section>
  )
}

export default HomeShowCase
