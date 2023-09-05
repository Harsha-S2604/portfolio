import AwardsCard from "./AwardsCard"
import SectionHeading from "../../../Common/SectionHeading"

const Awards = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const awards = sectionValue
    return (
        <section id={sectionTo}>
            <div className="container">
                <SectionHeading heading={"Awards"} underLineClass={"underline-brand-color"}/>
                <div className="row justify-content-center">
                        {
                            awards?.map((award, index) => {
                                return (
                                    <div className="col-md-4">
                                        <AwardsCard experience={award} key={'award_' + index} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Awards