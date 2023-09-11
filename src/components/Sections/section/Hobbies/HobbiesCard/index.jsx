import HobbyImage from "./HobbyImage"
import HobbyInfo from "./HobbyInfo"

const HobbiesCard = ({ hobbyInfo }) => {
    const { image } = hobbyInfo
    return (
        <div className="hobby-box">
            <HobbyImage image={image} />
            <HobbyInfo hobbyInfo={hobbyInfo} />
        </div>
    )
}

export default HobbiesCard