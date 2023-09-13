import ContactsList from "./ContactsList"

const Contacts = ({ data }) => {
    const { sectionTo, sectionValue } = data
    const contacts = sectionValue
    return (
        <section id={sectionTo} className="section-brand-background">
            <div className="container" style={{padding: "50px"}}>
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h3 className="card-title">Contacts</h3>
                        <div className="underline-brand-color" style={{marginLeft: "10px"}}></div>
                        <div style={{paddingTop: "30px"}}>
                            <p className="card-text">example@gmail.com</p>
                            <ContactsList contacts={contacts} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts