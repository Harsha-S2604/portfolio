const EducationCard = ({ education }) => {
    const { educationTitle, educationDesc } = education
    return (
        <div className="education-card">
            <div className="card-body">
                <h2 className="fw-bolder">{educationTitle}</h2>
                <p className="project-desc text-secondary">{educationDesc}</p>
            </div>            
        </div>
    )
}

export default EducationCard