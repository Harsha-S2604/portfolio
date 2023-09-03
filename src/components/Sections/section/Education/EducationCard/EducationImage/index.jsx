import Image from "../../../../../Common/Image"
const EducationImage = ({ image }) => {
    return (
        <Image imageSource={`/images/Education/${image}`} imageAlt={image} />
    )
}

export default EducationImage