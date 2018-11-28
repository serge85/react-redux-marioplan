import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {

  const projectSumary = projects.length ? (
    projects.map( project => {
      return <ProjectSummary key={project.id} project = {project}/>
    })
  ): (
    <h4>No project yet!</h4>
  )
  return (
    <div className="project-list section">
      {projectSumary}
    </div>
  )
}

export default ProjectList;
