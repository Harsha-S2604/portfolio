import './projects.css';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
    const projects = data.sectionValue

    return (
        <div id="projects">
            <div className='text-center project-head'>
                <h1 className="title fw-bold">Projects</h1>
            </div>
            <div className="project-list">
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard project={project} key={'project_' + index} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Projects