import CompanyImage from "./CompanyImage"
import ExperienceInfo from "./ExperienceInfo"

const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <div className="experience-card-body">
                <ExperienceInfo experience={experience}/>                
                <CompanyImage experience={experience} />
            </div>
        </div>
    )
}

export default ExperienceCard