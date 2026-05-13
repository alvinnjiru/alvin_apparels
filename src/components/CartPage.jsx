import { useContext } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    // Calculate subtotal
    const subtotal = cart.reduce(
        (sum, item) => sum + item.product_cost * item.quantity,
        0
    );

    const img_url = "https://alvinnjiru.alwaysdata.net/static/images/"

    const shippingFee = "Negotiable";

    // Handle checkout
    // const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const [showCheckout, setShowCheckout] = useState(false);
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleCheckout = async (e) => {
        e.preventDefault();

        if (phone.length !== 10) {
            alert("Phone number must contain exactly 10 digits");
            return;
        }

        setLoading("Processing payment...");
        setError("");
        setSuccess("");

        try {
            const data = new FormData();
            data.append("amount", subtotal);
            data.append("phone", phone);

            const response = await axios.post(
                "https://alvinnjiru.alwaysdata.net/api/mpesa_payment",
                data
            );

            if (response.status === 200) {
                setSuccess(response.data.message);
                setLoading("");
                setPhone("");
            }
        } catch (err) {
            setLoading("");
            setError("Payment failed. Try again.");
        }
    };

    return (
        <div className="container py-4">
            <Navbar />

            <h2 className="mb-4 fw-bold">My Shopping Cart</h2>

            <div className="row">
                {/* CART ITEMS */}
                <div className="col-lg-8">
                    {cart.map((item) => (
                        <div
                            className="card mb-3 shadow-sm border-0 rounded-4"
                            key={item.product_id}
                        >
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">

                                    {/* PRODUCT IMAGE + NAME */}
                                    <div className="d-flex align-items-center gap-3">

                                        <img
                                            // src={item.product_photo}
                                            src={img_url + item.product_image}
                                            alt={item.product_name}
                                            className="rounded-3"
                                            style={{
                                                width: "90px",
                                                height: "90px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <div>
                                            <h5 className="mb-1 fw-semibold">
                                                {item.product_name}
                                            </h5>

                                            <p className="text-muted mb-0">
                                                Ksh {item.product_cost}
                                            </p>
                                        </div>
                                    </div>

                                    {/* QUANTITY CONTROLS */}
                                    <div
                                        className="d-flex align-items-center border rounded-pill px-2 py-1"
                                        style={{ gap: "12px" }}
                                    >
                                        <button
                                            className="btn btn-light rounded-circle"
                                            onClick={() =>
                                                item.quantity > 1 &&
                                                updateQuantity(
                                                    item.product_id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            <FaMinus size={12} />
                                        </button>

                                        <span className="fw-bold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            className="btn btn-light rounded-circle"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.product_id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            <FaPlus size={12} />
                                        </button>
                                    </div>

                                    {/* PRICE */}
                                    <div>
                                        <h5 className="fw-bold text-success mb-0">
                                            Ksh{" "}
                                            {item.product_cost * item.quantity}
                                        </h5>
                                    </div>

                                    {/* DELETE ICON */}
                                    <button
                                        className="btn btn-outline-danger rounded-circle"
                                        onClick={() =>
                                            removeFromCart(item.product_id)
                                        }
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ORDER SUMMARY */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 rounded-4 p-4">
                        <h4 className="fw-bold mb-4">Order Summary</h4>

                        <div className="d-flex justify-content-between mb-3">
                            <span>Subtotal</span>
                            <span className="fw-semibold">
                                Ksh {subtotal}
                            </span>
                        </div>
                    
                        <div className="d-flex justify-content-between mb-3">
                            <span>Shipping Fee</span>
                            <span className="text-muted">
                                {shippingFee}
                            </span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-4">
                            <h5 className="fw-bold">Total</h5>
                            <h5 className="fw-bold text-success">
                                Ksh {subtotal}
                            </h5>
                        </div>

                        <button className="btn btn-success w-100 py-3 rounded-3 fw-semibold"
                            onClick={() => setShowCheckout(!showCheckout)}
                        >
                            Checkout (Mpesa)
                        </button>

                        {
                            showCheckout && (
                                <form onSubmit={handleCheckout} className="mt-4">

                                    <input
                                        type="tel"
                                        className="form-control mb-3"
                                        placeholder="Enter MPESA Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        maxLength={10}
                                        required
                                    />

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        value={`Ksh ${subtotal}`}
                                        readOnly
                                    />

                                    <button className="btn btn-dark w-100">
                                        Pay Now
                                    </button>

                                    <p className="text-warning mt-2">{loading}</p>
                                    <p className="text-danger mt-2">{error}</p>
                                    <p className="text-success mt-2">{success}</p>

                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;


// import { useContext } from "react";
// import { CartContext } from "./CartContext";
// import Navbar from "./Navbar";

// const CartPage = () => {
//     const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

//     const total = cart.reduce(
//         (sum, item) => sum + item.product_cost * item.quantity,
//         0
//     );

//     return (

//         <div className="container">
//             <h2>Your Cart</h2>
//             <Navbar />

//             {cart.map(item => (
//                 <div className="card p-3 mb-3" key={item.product_id}>
//                     <h5>{item.product_name}</h5>
//                     <p>{item.product_cost} Ksh</p>

//                     <input
//                         type="number"
//                         min="1"
//                         value={item.quantity}
//                         onChange={(e) =>
//                             updateQuantity(item.product_id, Number(e.target.value))
//                         }
//                     />

//                     <button
//                         className="btn btn-danger mt-2"
//                         onClick={() => removeFromCart(item.product_id)}
//                     >
//                         Remove
//                     </button>
//                 </div>
//             ))}

//             {/* TOTAL CARD */}
//             <div className="card p-4 mt-4">
//                 <h4>Total: {total} Ksh</h4>

//                 <button className="btn btn-success">
//                     Checkout (Mpesa)
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartPage;

