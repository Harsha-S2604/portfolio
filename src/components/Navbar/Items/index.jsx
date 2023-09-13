import { Link } from 'react-scroll'

const Items = ({ data }) => {
    return (
        <div id="section-items">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    {
                        data.map((sectionItem, index) => {
                            return (
                                <li className="nav-item" key={sectionItem.sectionName + index}>
                                    <Link
                                        activeClass="active"
                                        className="custom-scroll-link nav-link navbar-menu"
                                        to={sectionItem.sectionTo}
                                        offset={-60}
                                    >
                                        {sectionItem.sectionName}
                                    </Link>
                                </li>
                            )
                            
                        })
                    }                    
                </ul>
            </div>
        </div>
    )
}

export default Items