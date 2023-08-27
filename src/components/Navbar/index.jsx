import Brands from "./Brands"
import Items from "./Items"
import sectionsData from "../../config/sectionsData"
import './navbar.css'
import { useState, useEffect } from "react"

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const brands = [sectionsData[0]]
    const items = sectionsData.slice(1)

    return (
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolling > 0 ? 'navbar-scroll' : ''}`}>
                <div className="container navbar-menu">
                    <Brands data={brands} />
                    <Items data={items} />
                </div>
            </nav>
    )
}

export default Navbar