import ExperienceCard from "./ExperienceCard"
import "./experience.css"

const Experience = ({ data }) => {
    const experiences = data.sectionValue
    return (
        <div id="experience">
            <div className='text-center project-head'>
                <div className='underline-container'>
                    <h1 className="title fw-bold">Experience</h1>
                    <div class="underline-brand-color"></div>
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        {
                            experiences?.map((experience, index) => {
                                return (
                                    <div className="col-md-10">
                                        <ExperienceCard experience={experience} key={'experience_' + index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience