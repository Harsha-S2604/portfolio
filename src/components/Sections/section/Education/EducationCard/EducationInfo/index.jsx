const EducationInfo = ({ education }) => {
    const { title, course, year } = education
    return (
        <div className="box-content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="education-title">{title}</h4>
                    <h6 className="education-course">{course}</h6>
                    <div className="w-more">
                        <span className="experience-date">{year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationInfo