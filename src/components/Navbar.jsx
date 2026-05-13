import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    let navigator = useNavigate()

    const handleLogout = () => {
        localStorage.clear()

        navigator("/signin")

    }
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to='/'>404 Apparels</Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    {user !== null && user.role === "admin" ? (
                        <Link className="nav-link" to="/addproducts">Add products</Link>) : ("")}
                    <Link className="nav-link" to="/aboutus">About us</Link>
                    <Link className="nav-link" to="/order" >Order</Link>
                    <Link className="nav-link" to="/cart" >My cart</Link>
                </div>

                {user ? (
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="#">{user.username}</Link>
                        <button className="btn nav-link" onClick={handleLogout}>Log out</button>
                    </div>
                ) : (
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                        <Link className="nav-link" to="/signup">Sign Up</Link>

                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;