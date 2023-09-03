const ExperienceInfo = ({ experience }) => {
    const { companyName, experienceDesc } = experience
    return (
        <div className="experience-info">
            <h2 className="company-name">{companyName}</h2>
            <p className="experience-description text-secondary">{experienceDesc}</p>    
        </div>
    )
}

export default ExperienceInfo