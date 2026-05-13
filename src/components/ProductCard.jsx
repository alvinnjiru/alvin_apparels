import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, img_url, addToCart, deleteProduct }) => {
    const navigate = useNavigate();

    // Check if the current user is an admin
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const isAdmin = user && user.role === "admin";

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card modern-card shadow-sm h-100">
                <img
                    src={img_url + product.product_image}
                    alt=""
                    className="product_img mt-4"
                />

                <div className="card-body modern-card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{product.product_name}</h5>
                    <div className="mt-auto">
                        <b className="text-danger fs-5">{product.product_cost} Ksh</b>
                    </div>

                    {!isAdmin && (
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <button
                                className="btn btn-dark btn-pill px-3"
                                onClick={() =>
                                    navigate("/makepayment", { state: { product } })
                                }
                            >
                                Purchase
                            </button>

                            <button
                                className="btn btn-outline-dark btn-icon-pill"
                                onClick={() => addToCart(product)}
                                title="Add to Cart"
                            >
                                <FaShoppingCart size={18} />
                            </button>
                        </div>
                    )}

                    {isAdmin && (
                        <div className="d-flex justify-content-between mt-2 pt-2 border-top">
                            <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() =>
                                    navigate("/editproduct", { state: { product } })
                                }
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this product?")) {
                                        deleteProduct(product.product_id);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;