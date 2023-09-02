import Brands from "./Brands"
import Items from "./Items"
import sectionsData from "../../config/sectionsData"
import './navbar.css'

const Navbar = () => {
    const brands = [sectionsData[0]]
    const items = sectionsData.slice(1)

    return (
            <nav className={`navbar navbar-expand-lg sticky-top navbar-scroll`}>
                <div className="container navbar-menu">
                    <Brands data={brands} />
                    <Items data={items} />
                </div>
            </nav>
    )
}

export default Navbar