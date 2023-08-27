import { Link } from "react-scroll"

const Brands = ({ data }) => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    return (
        <div id="brand">
            {
                data.map((brand, index) => {
                    return (
                        <Link 
                            key={brand.sectionValue + index}
                            to={brand.sectionTo}
                            className="navbar-brand navbar-menu"
                            onClick={scrollToTop}
                        >
                            {brand.sectionValue}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Brands
