import VolunteerImage from "./VolunteerImage"
import VolunteerInfo from "./VolunteerInfo"

const VolunteerCard = ({ volunteer }) => {
    return (
        <div className="white-box" style={{padding: "20px"}}>
            <VolunteerImage volunteer={volunteer} />
            <VolunteerInfo volunteer={volunteer}/>                
        </div>
    )
}

export default VolunteerCard