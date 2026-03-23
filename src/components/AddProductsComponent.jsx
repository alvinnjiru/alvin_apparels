import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const AddProductsComponent = () => {
    let [product_name, setProductName] = useState("");
    // let [product_description, setProductDescription] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_category, setProductCategory] = useState("");
    let [product_image, setProductImage] = useState("");

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("");
        setSuccess("")
        setLoading("Submitting!.....")

        try {
            //box / envelope to put product data in for transmission
            const product_data = new FormData()

            //add end product information needed to the box
            product_data.append("product_name", product_name);
            // product_data.append("product_description", product_description);
            product_data.append("product_cost", product_cost);
            product_data.append("product_category", product_category);
            product_data.append("product_image", product_image);

            //ese axios to send the data to the server
            const response = await axios.post("https://alvinnjiru.alwaysdata.net/api/add_products", product_data);
            console.log(response);

            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)

                //clear the form
                setProductName("")
                // setProductDescription("");
                setProductCost("")
                setProductCategory("");
                setProductImage("")
            }

        } catch (error) {
            setError(error.message)
            setLoading("");

        }

    };

    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Add product</h2>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter product Name"
                        required
                        onChange={(e) => { setProductName(e.target.value) }}
                        value={product_name}
                    />
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter product cost"
                        required
                        onChange={(e) => { setProductCost(e.target.value) }}
                        value={product_cost}
                    />
                    <br />

                    <label htmlFor="" className="form-label"> Product Category</label>
                    <select
                        className="form-select"
                        required
                        onChange={(e) => { setProductCategory(e.target.value) }}
                    >
                        <option value="">Select Category</option>
                        <option value="404 merch">404 merchandise</option>
                        <option value="tshirts">T-shirtss</option>
                        <option value="trousers">Trousers</option>
                        <option value="fulloutfits">Full-outfits</option>
                        <option value="shoes">Shoes</option>
                        <option value="hoodies">Hoodies</option>

                    </select>
                    <br />

                    <label htmlFor="" className="form-label">Product Image</label>
                    <input
                        type="file"
                        className="form-control"
                        required
                        //multiple ....atribute if u want to add multiple files
                        accept="image/*"
                        onChange={(e) => { setProductImage(e.target.files[0]) }}
                    />
                    <br />

                    <button className="btn btn-dark">Add product</button>



                </form>
            </div>
        </div>
    );

}

export default AddProductsComponent;