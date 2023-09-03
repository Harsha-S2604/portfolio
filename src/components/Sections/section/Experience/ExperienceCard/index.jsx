import CompanyImage from "./CompanyImage"
import ExperienceInfo from "./ExperienceInfo"

const ExperienceCard = ({ experience }) => {
    return (
        <div className="white-box" style={{padding: "20px"}}>
            <CompanyImage experience={experience} />
            <ExperienceInfo experience={experience}/>                
        </div>
    )
}

export default ExperienceCard