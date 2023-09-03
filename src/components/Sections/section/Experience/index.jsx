import ExperienceCard from "./ExperienceCard"
import "./experience.css"

const Experience = ({ data }) => {
    const experiences = data.sectionValue
    return (
        <section id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center project">
                            <div className='text-center project-head'>
                                <div className='underline-container'>
                                    <h1 className="title fw-bold">Experience</h1>
                                    <div class="underline-brand-color"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                        {
                            experiences?.map((experience, index) => {
                                return (
                                    <div className="col-md-4">
                                        <ExperienceCard experience={experience} key={'experience_' + index} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Experience