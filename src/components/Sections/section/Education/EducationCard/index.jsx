import EducationImage from "./EducationImage"
import EducationInfo from "./EducationInfo"

const EducationCard = ({ education }) => {
    const { image } = education
    return (
        <div className="white-box">
            <EducationImage image={image} />
            <EducationInfo education={education} />
        </div>
    )
}

export default EducationCard