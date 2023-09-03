const ExperienceInfo = ({ experience }) => {
    const { companyName, experienceDesc, role } = experience
    return (
        <div className="box-content">
            <div className="row">
                <div className="col-sm-10">
                    <h2 className="company-name">{companyName}</h2>
                    <h5 className="role">{role}</h5>
                    {/* <p className="experience-description text-secondary">{experienceDesc}</p> */}
                    <div className="w-more">
                        <span className="experience-date">May 2023 - Present</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo