import './projects.css';
import ProjectCard from './ProjectCard';
import SectionHeading from '../../../Common/SectionHeading';

const Projects = ({ data }) => {
    const projects = data.sectionValue

    return (
        <div id="projects" className='projects'>
            <SectionHeading heading={"Projects"} underLineClass={"underline-white"}/>
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