import EducationCard from "./EducationCard"
import "./education.css"

const Education = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const educations = sectionValue
    return (
        <section id={sectionTo} className="section-brand-background">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className='text-center project-head'>
                            <div className='underline-container'>
                                <h1 className="title fw-bold">Education</h1>
                                <div class="underline-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        educations?.map((education, index) => {
                            return (
                                <div className="col-md-5">
                                    <EducationCard education={education} key={'education_' + index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </section>
    )
}

export default Education