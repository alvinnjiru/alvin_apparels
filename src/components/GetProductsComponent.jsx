import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProductsComponent = () => {

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("")
    let [tshirts, setTshirts] = useState([])
    let [trousers, setTrousers] = useState([]);
    let [merch, setmerch] = useState([]);
    let [shoes, setShoes] = useState([]);
    let [fulloutfits, setFullOutfits] = useState([]);
    let [hoodies, setHoodies] = useState([])

    //base url for image location - finish with foward slash because the imagses are insidde the images folder
    const img_url = "https://alvinnjiru.alwaysdata.net/static/images/"

    let navigator = useNavigate()

    //function to fetch products from the server
    const getProducts = async () => {
        setError("")
        setLoading("Fetching products. Please wait...")

        try {
            const response = await axios.get("https://alvinnjiru.alwaysdata.net/api/get_products");
            console.log(response);
            if (response.status === 200) {
                setLoading("")
                setProducts(response.data)

                //categories planning
                let tshirts_products = response.data.filter((product) => product.product_category === "tshirts");

                setTshirts(tshirts_products)

                let trousers_products = response.data.filter((product) => product.product_category === "trousers")

                setTrousers(trousers_products);

                let merch_products = response.data.filter((product) => product.product_category === "merch");

                setmerch(merch_products);

                let shoes_products = response.data.filter((product) => product.product_category === "shoes")

                setShoes(shoes_products);



            }
        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }

    useEffect(() => { getProducts() }, [])
    return (
        <div className="row">
            <Navbar />
            <h3>Available Products</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>

            { /*map/loop over the products array to acces one at a time */}

            <h2 className="text-center my-2 p-4 bg-dark text-white">Tshirts</h2>
            {tshirts.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <b className="text-warning">{product.product_cost}Ksh</b>
                            <br />
                            <button className="btn btn-dark" onClick={() => { navigator("/makepayment", { state: { product } }) }}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}


            <h2 className="text-center my-2 p-4 bg-dark text-white">Trousers</h2>
            {trousers.map((product) => (
                <div className="col-md-4 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <b className="text-warning">{product.product_cost}Ksh</b>
                            <br />
                            <button className="btn btn-dark" onClick={() => { navigator("/makepayment", { state: { product } }) }}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}

            <h2 className="text-center my-2 p-4 bg-dark text-white">404merch</h2>
            {merch.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <b className="text-warning">{product.product_cost}Ksh</b>
                            <br />
                            <button className="btn btn-dark" onClick={() => { navigator("/makepayment", { state: { product } }) }}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default GetProductsComponent;