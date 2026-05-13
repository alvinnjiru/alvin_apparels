
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {
    FaTshirt,
    FaLeaf,
    FaUsers,
    FaShoppingBag
} from "react-icons/fa";

const AboutUsComponent = () => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>
            <Navbar />

            {/* HERO SECTION */}
            {/* <div
                className="text-white d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/j2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "500px",
                }}
            >
                <div>
                    <h1
                        className="fw-bold display-2"
                        style={{ letterSpacing: "2px" }}
                    >
                        404 Apparels
                    </h1>

                    <p className="fs-3 mt-3">
                        Lost in fashion? We help you find your drip.
                    </p>

                    <button
                        className="btn btn-success btn-lg mt-4 px-5 py-3 shadow"
                        onClick={() => navigate("/")}
                    >
                        Browse Products
                    </button>
                </div>
            </div> */}

            {/* ABOUT SECTION */}
            <div className="container py-5">

                <div className="text-center mb-5">
                    <button
                        className="btn btn-success btn-lg mt-4 px-5 py-3 shadow"
                        onClick={() => navigate("/")}
                    >
                        Browse Products
                    </button>
                    <h2 className="fw-bold display-5">
                        Who We Are
                    </h2>

                    <p
                        className="text-muted mx-auto mt-3"
                        style={{ maxWidth: "800px" }}
                    >
                        Welcome to <strong>404 Apparels</strong> —
                        where style meets sustainability.
                        We are a thrift-based fashion platform
                        built for people who want to stand out
                        without breaking the bank.

                        404 Apparels is more than just clothing.
                        It’s a movement for self-expression,
                        confidence, and individuality.
                    </p>
                </div>

                {/* FEATURE CARDS */}
                <div className="row g-4">

                    {/* CARD 1 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card border-0 shadow-lg h-100 rounded-4 text-center p-4">
                            <div
                                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "2rem"
                                }}
                            >
                                <FaTshirt />
                            </div>

                            <h4 className="fw-bold">
                                Unique Fashion
                            </h4>

                            <p className="text-muted mt-3">
                                We bring rare thrift pieces that
                                help you express your own style.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card border-0 shadow-lg h-100 rounded-4 text-center p-4">
                            <div
                                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "2rem"
                                }}
                            >
                                <FaLeaf />
                            </div>

                            <h4 className="fw-bold">
                                Sustainable
                            </h4>

                            <p className="text-muted mt-3">
                                Thrifting helps reduce waste and
                                supports eco-friendly fashion.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card border-0 shadow-lg h-100 rounded-4 text-center p-4">
                            <div
                                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "2rem"
                                }}
                            >
                                <FaUsers />
                            </div>

                            <h4 className="fw-bold">
                                Community Driven
                            </h4>

                            <p className="text-muted mt-3">
                                Built for fashion lovers,
                                creatives, and trendsetters.
                            </p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card border-0 shadow-lg h-100 rounded-4 text-center p-4">
                            <div
                                className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "2rem"
                                }}
                            >
                                <FaShoppingBag />
                            </div>

                            <h4 className="fw-bold">
                                Affordable Drip
                            </h4>

                            <p className="text-muted mt-3">
                                Get premium fashion looks at
                                prices that fit your budget.
                            </p>
                        </div>
                    </div>
                </div>

                {/* MISSION SECTION */}
                <div className="row mt-5 align-items-center">

                    <div className="col-lg-6">
                        <img
                            src=""
                            alt=""
                            className="img-fluid rounded-4 shadow-lg"
                            style={{
                                height: "400px",
                                width: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h2 className="fw-bold mb-4">
                            Our Mission
                        </h2>

                        <p className="text-muted fs-5">
                            At 404 Apparels, we believe fashion
                            should be bold, accessible, and unique.

                            Our mission is to connect people
                            with stylish thrift wear that helps
                            them stand out confidently while
                            promoting sustainable fashion culture.
                        </p>

                        <button
                            className="btn btn-dark btn-lg mt-3 px-4"
                            onClick={() => navigate("/")}
                        >
                            Browse Products
                        </button>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default AboutUsComponent;
// import Navbar from "./Navbar";


// const styles = {
//     container: {
//         fontFamily: "Arial, sans-serif",
//         color: "#333"
//     },
//     hero: {
//         position: "relative",
//         textAlign: "center",
//     },
//     heroImage: {
//         width: "100%",
//         height: "400px",
//         objectFit: "cover",
//     },
//     overlay: {
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         color: "#fff",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         padding: "20px",
//         borderRadius: "10px"
//     },
//     title: {
//         fontSize: "3rem",
//         margin: 0
//     },
//     tagline: {
//         fontSize: "1.5rem",
//         marginTop: "10px 0",
//     },
//     content: {
//         padding: " 40px 20px",
//         maxWidth: "900px",
//         margin: "0 auto",
//         lineHeight: "1.6",
//     },
//     list: {
//         paddingLeft: "20px"
//     },
// };


// const AboutUsComponent = () => {
//     return (
//         <div>
//             <Navbar />
//             <h1>About us</h1>

//             <div style={styles.overlay}>
//                 <h1 style={styles.title}>
//                     404 Apparels
//                 </h1>
//                 <p style={styles.tagline}>
//                     Lost in fashion? We help you find your drip
//                 </p>
//             </div>

//             {/* About us content */}
//             <div style={styles.content}>
//                 <h2>Who We Are?...</h2>
//                 <p>
//                     Welcome to <strong>404 Apparels</strong> - Where style meets sustainability. 
//                     We are a thrift - based fashion platform built for people who want to stand out without breaking their bank.
//                     404 Apparels is not just a store, its a movement to speak to the world through your outfit.
//                 </p>

//             </div>
//         </div>
//     );
// }

// export default AboutUsComponent;