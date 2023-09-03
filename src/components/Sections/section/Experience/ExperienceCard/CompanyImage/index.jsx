const CompanyImage = ({ experience }) => {
    const { companyImage } = experience
    return (
        <div className="company-image">
            <img src={`/images/Experience/${companyImage}`} alt={companyImage} />
        </div>
    )
}

export default CompanyImage