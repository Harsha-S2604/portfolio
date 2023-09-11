const SectionHeading = ({ heading, underLineClass}) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className='text-center project-head'>
                    <div className='underline-container'>
                        <h2 className="title fw-bold">{heading}</h2>
                        <div className={underLineClass}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHeading