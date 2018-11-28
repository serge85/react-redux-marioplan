import React from "react";

const ProjectDetail = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Tile - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            commodi. Quasi accusamus maxime, neque quis quas suscipit tempora
            deserunt necessitatibus fugit pariatur itaque corporis aut
            exercitationem, beatae labore vero ratione?
          </p>
        </div>
        <div className="card-action gret ligthen-4 grey-text">
          <div>Posted by Net ninja</div>
          <div>22 Septembrer</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
