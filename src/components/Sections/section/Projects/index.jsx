import './projects.css';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
    const projects = data.sectionValue

    return (
        <div id="projects" className='projects'>
            <div className='text-center project-head'>
            <div className='underline-container'>
                <h1 className="title fw-bold">Projects</h1>
                <div class="underline"></div>
            </div>
                
            </div>
            <div className="container mt-4 custom-container">
                <div className='row'>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard project={project} key={'project_' + index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects