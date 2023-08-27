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
                        <SectionComponent key={sectionName + index} data={section} />
                    )
                })
            }       
        </div>
    )
}

export default Sections