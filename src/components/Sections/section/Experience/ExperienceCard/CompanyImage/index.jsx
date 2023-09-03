const CompanyImage = ({ experience }) => {
    const { companyImage } = experience
    return (
        <div className="box-image">
            <img className="img-fluid" src={`/images/Experience/${companyImage}`} alt={companyImage} />
        </div>
    )
}

export default CompanyImage