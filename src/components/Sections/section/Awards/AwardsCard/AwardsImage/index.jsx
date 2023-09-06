import Image from "../../../../../Common/Image"

const AwardsImage = ({ image }) => {
    return (
        <Image imageSource={`/images/Experience/${image}`} imageAlt={image} />
    )
}

export default AwardsImage