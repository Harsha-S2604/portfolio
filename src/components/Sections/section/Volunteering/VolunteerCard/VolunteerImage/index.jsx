import Image from "../../../../../Common/Image"
const VolunteerImage = ({ volunteer }) => {
    const { image } = volunteer
    return (
        <Image imageSource={`/images/Volunteer/${image}`} imageAlt={image} />
    )
}

export default VolunteerImage