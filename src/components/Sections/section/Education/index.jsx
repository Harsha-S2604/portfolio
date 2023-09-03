import EducationCard from "./EducationCard"
import "./education.css"

const Education = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const educations = sectionValue
    return (
        <div id={sectionTo} className="section-brand-background">
            <div className='text-center section-heading'>
                <div className='underline-container'>
                    <h1 className="title fw-bold">Education</h1>
                    <div class="underline-white"></div>
                </div>
            </div>
            <div>
                {
                    educations?.map((education, index) => {
                        return (
                            <div>
                                <EducationCard education={education} key={'education_' + index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education