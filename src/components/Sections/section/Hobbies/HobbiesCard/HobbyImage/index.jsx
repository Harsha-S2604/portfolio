import Image from "../../../../../Common/Image"
const HobbyImage = ({ image }) => {
    return (
        <Image imageSource={`/images/Hobbies/${image}`} imageAlt={image} />
    )
}

export default HobbyImage