const ProjectCard = ({ project }) => {
    return (
        <div style={{paddingBottom: "40px", maxWidth: "20.625rem"}}>
            <div className="project-image">
                <img src={"/images/Projects/" + project.projectImage} className="card-img-top" alt={project.projectImage} />
            </div>
            <div>
                <h2 className="fw-bolder">{project.projectName}</h2>
                <p className="project-desc text-secondary">{project.projectDescription}</p>
                <a href={project.projectSource} className="button-link project-source" target="_blank" rel="noreferrer">View Project</a>
            </div>            
        </div>
    )
}

export default ProjectCard