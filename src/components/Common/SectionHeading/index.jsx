const SectionHeading = ({ heading, underLineClass}) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className='text-center project-head'>
                    <div className='underline-container'>
                        <h1 className="title fw-bold">{heading}</h1>
                        <div className={underLineClass}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHeading