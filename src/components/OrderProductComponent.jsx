import Navbar from "./Navbar";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "./Footer";


// const img_url = "https://alvinnjiru.alwaysdata.net/static/images/"
// const img_url = "./public/" 

const thriftCategories = [
    {
        title: "T-shirts",
        items: [
            {
                product_id: "t1",
                product_name: "Choice one",
                product_cost: 350,
                product_image: "/img7.jpg"
            },
            {
                product_id: "t2",
                product_name: "Choice 2a",
                product_cost: 850,
                product_image: "/1.jpg"
            },
            {
                product_id: "t3",
                product_name: "Choice 2b",
                product_cost: 850,
                product_image: "/2.jpg"
            },
            {
                product_id: "t4",
                product_name: "Branded t-shirts",
                product_cost: 1500,
                product_image: "/5.jpg"
            }
        ]
    },

    {
        title: "Trousers",
        items: [
            {
                product_id: "tr1",
                product_name: "Wide leg sweats",
                product_cost: 300,
                product_photo: "/tr3.png"
            },
            {
                product_id: "tr2",
                product_name: "Sweatpants",
                product_cost: 300,
                product_photo: "/image4.jpg"
            },
            {
                product_id: "tr3",
                product_name: "Choice two",
                product_cost: 250,
                product_photo: "/image2.jpg"
            },
            {
                product_id: "tr4",
                product_name: "Branded Trousers",
                product_cost: 1800,
                product_photo: "/tr4.png"
            }
        ]
    },

    {
        title: "Hoodies",
        items: [
            {
                product_id: "h1",
                product_name: "Brand Hoodies",
                product_cost: 450,
                product_photo: "/j4.png"
            },
            {
                product_id: "h2",
                product_name: "Puff jacket",
                product_cost: 1500,
                product_photo: "/j1.png"
            },
            {
                product_id: "h3",
                product_name: "Bape Hoodies",
                product_cost: 2500,
                product_photo: "/j2.png"
            },
            {
                product_id: "h4",
                product_name: "College jackets",
                product_cost: 1500,
                product_photo: "/j3.png"
            }
        ]
    }
];
//     {
//         title: "T-shirts",
//         items: [
//             { product_id: "t1", product_name: "Choice one", product_cost: 300 },
//             { product_id: "t2", product_name: "Choice one 2", product_cost: 350 },
//             { product_id: "t3", product_name: "Choice 2", product_cost: 350 },
//             { product_id: "t4", product_name: "Branded t-shirts", product_cost: 1000 }
//         ]
//     },
//     {
//         title: "Trousers",
//         items: [
//             { product_id: "tr1", product_name: "Wide leg sweats", product_cost: 300 },
//             { product_id: "tr2", product_name: "Sweatpants", product_cost: 300 },
//             { product_id: "tr3", product_name: "Choice two", product_cost: 250 },
//             { product_id: "tr4", product_name: "Branded Trousers", product_cost: 1800 }
//         ]
//     },
//     {
//         title: "Hoodies",
//         items: [
//             { product_id: "h1", product_name: "Brand Hoodies", product_cost: 450 },
//             { product_id: "h2", product_name: "Puff jacket", product_cost: 1500 },
//             { product_id: "h3", product_name: "Bape Hoodies", product_cost: 2500 },
//             { product_id: "h4", product_name: "College jackets", product_cost: 1500 }
//         ]
//     }
// ];

const OrderProductComponent = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { addToCart, cart } = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulated order submission
        alert("Custom order placed successfully! We will contact you soon.");
        setPhone("");
        setPassword("");
        setDescription("");
        navigate("/");
    }

    return (
        <div className="container-fluid pb-5" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <Navbar />

            <div className="d-flex justify-content-end p-3">
                <button
                    className="btn btn-outline-dark position-relative"
                    onClick={() => navigate("/cart")}
                >
                    <FaShoppingCart size={22} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                    </span>
                </button>
            </div>

            <h2 className="bg-secondary text-white text-center p-3 mt-2 shadow-sm rounded">Get your thrifted clothes of choice here</h2>

            {/* Render Thrift Categories */}
            {thriftCategories.map((category, index) => (
                <section className="row mt-4 px-3" key={index}>
                    <h2 className="bg-success text-white text-center py-2 rounded shadow-sm"><u>{category.title}</u></h2>
                    {category.items.map((item) => (
                        <div className="col-lg-3 col-md-6 mb-4 mt-3" key={item.product_id}>
                            <div className="card shadow border-0 h-100">
                                <img
                                    src={item.product_image}
                                    alt={item.product_name}
                                    className="card-img-top"
                                    style={{
                                        height: "250px",
                                        objectFit: "cover"
                                    }}
                                />
                                {/* <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                                    <span className="text-muted fs-5">{item.product_name}</span>
                                </div> */}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="fw-bold">{item.product_name}</h5>
                                    <b className="text-warning fs-5">Ksh {item.product_cost}</b>
                                    <div className="mt-auto pt-3">
                                        <button
                                            className="btn btn-danger w-100 fw-bold shadow-sm"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart <FaShoppingCart className="ms-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            ))}

            {/* Checkout Form */}
            <div className="row justify-content-center mt-5 pt-3">
                <div className="col-lg-6 col-md-8">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                        <div className="bg-success text-white text-center py-4">
                            <h2 className="mb-0 fw-bold" style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>
                                Your Cloth Choice
                            </h2>
                            <p className="mb-0 mt-2 opacity-75">Tell us what you're looking for, and we'll find it.</p>
                        </div>

                        <div className="card-body p-5 bg-white">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label fw-bold text-secondary">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control form-control-lg border-success-subtle bg-light focus-ring focus-ring-success"
                                        placeholder="Enter your phone number"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        style={{ transition: "all 0.3s ease" }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold text-secondary">Account Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg border-success-subtle bg-light focus-ring focus-ring-success"
                                        placeholder="Enter password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold text-secondary">Clothes Description</label>
                                    <textarea
                                        className="form-control form-control-lg border-success-subtle bg-light focus-ring focus-ring-success"
                                        rows="5"
                                        placeholder="Type description of clothes of your choice (brands, sizes, colors, styles...)"
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        style={{ resize: "none" }}
                                    ></textarea>
                                </div>

                                <div className="d-grid mt-5">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg fw-bold shadow py-3 text-uppercase"
                                        style={{ letterSpacing: "1px", borderRadius: "8px" }}
                                    >
                                        Place Your Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrderProductComponent;


// const thriftCategories = [