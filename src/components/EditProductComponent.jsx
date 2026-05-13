import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const EditProductComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Check if product data is available
    const productData = location.state?.product || {};

    let [product_name, setProductName] = useState(productData.product_name || "");
    let [product_cost, setProductCost] = useState(productData.product_cost || "");
    let [product_category, setProductCategory] = useState(productData.product_category || "");
    let [product_image, setProductImage] = useState(null);

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    useEffect(() => {
        if (!location.state?.product) {
            navigate("/"); // redirect if no product is passed
        }
    }, [location.state, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading("Updating product! Please wait...");

        try {
            const product_data = new FormData();

            product_data.append("product_name", product_name);
            product_data.append("product_cost", product_cost);
            product_data.append("product_category", product_category);
            
            // Only append image if a new one is selected
            if (product_image) {
                product_data.append("product_image", product_image);
            }

            const response = await axios.post(`https://alvinnjiru.alwaysdata.net/api/edit_product/${productData.product_id}`, product_data);

            if (response.status === 200) {
                setLoading("");
                setSuccess(response.data.message);
                
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        } catch (error) {
            setError(error.message);
            setLoading("");
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Edit Product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter product Name"
                        required
                        onChange={(e) => setProductName(e.target.value)}
                        value={product_name}
                    />
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter product cost"
                        required
                        onChange={(e) => setProductCost(e.target.value)}
                        value={product_cost}
                    />
                    <br />

                    <label className="form-label"> Product Category</label>
                    <select
                        className="form-select"
                        required
                        onChange={(e) => setProductCategory(e.target.value)}
                        value={product_category}
                    >
                        <option value="">Select Category</option>
                        <option value="merch">404 merchandise</option>
                        <option value="tshirts">T-shirts</option>
                        <option value="trousers">Trousers</option>
                        <option value="fulloutfits">Full-outfits</option>
                        <option value="shoes">Shoes</option>
                        <option value="hoodies">Hoodies</option>
                    </select>
                    <br />

                    <label className="form-label">Product Image (Leave blank to keep existing image)</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => setProductImage(e.target.files[0])}
                    />
                    <br />

                    <button className="btn btn-dark">Update Product</button>
                    <button type="button" className="btn btn-outline-secondary ms-2" onClick={() => navigate("/")}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditProductComponent;
