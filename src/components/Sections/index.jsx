import sectionsData from "../../config/sectionsData"

const Sections = () => {
    const sections = sectionsData.slice(1)

    return (
        <div id="sections" className="container sections">
            {
                sections.map((section, index) => {
                    const sectionName = section.sectionName
                    const SectionComponent = section.sectionComponent
                    return (
                        SectionComponent ? <SectionComponent key={sectionName + index} data={section} /> : null
                    )
                })
            }       
        </div>
    )
}

export default Sections