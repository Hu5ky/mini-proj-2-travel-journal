import globe from "../assets/globe.png"

function Header() {
    return (
        <header className="header">
            <img className="header-img" src={globe} />
            <span className="header-title">my travel journal.</span>
        </header>
    )
}

export default Header