import SectionHeading from "../../../Common/SectionHeading"
import EducationCard from "./EducationCard"
import "./education.css"

const Education = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const educations = sectionValue
    return (
        <section id={sectionTo} className="section-brand-background">
            <div className="container">
                <SectionHeading heading={"Education"} underLineClass={"underline-white"}/>
                <div className="row justify-content-center">
                    {
                        educations?.map((education, index) => {
                            return (
                                <div className="col-md-4">
                                    <EducationCard education={education} key={'educa    tion_' + index} />
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