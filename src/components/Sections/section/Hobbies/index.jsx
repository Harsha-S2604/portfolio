import SectionHeading from "../../../Common/SectionHeading"
import HobbiesCard from "./HobbiesCard"
import "./hobbies.css"

const Hobbies = ({ data }) => {
    const hobbies = data.sectionValue
    return (
        <section id="hobbies" className="section-brand-background">
            <div className="container">
                <SectionHeading heading={"Hobbies"} underLineClass={"underline-white"} />
                <div className="row justify-content-center">
                        {
                            hobbies?.map((hobby, index) => {
                                return (
                                    <div className="col-md-2">
                                        <HobbiesCard hobbyInfo={hobby} key={'hobby_' + index} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Hobbies