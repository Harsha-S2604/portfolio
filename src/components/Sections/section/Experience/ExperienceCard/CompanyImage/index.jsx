import Image from "../../../../../Common/Image"
const CompanyImage = ({ experience }) => {
    const { companyImage } = experience
    return (
        <Image imageSource={`/images/Experience/${companyImage}`} imageAlt={companyImage} />
    )
}

export default CompanyImage