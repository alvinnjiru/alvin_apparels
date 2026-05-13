import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Footer from "./Footer";

const GetProductsComponent = () => {


    // let [cart, setCart] = useState([]);
    let [products, setProducts] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");
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

    // add to cart
    const { cart, addToCart } = useContext(CartContext);
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

                let fulloutfits_products = response.data.filter((product) => product.product_category === "fulloutfits")

                setFullOutfits(fulloutfits_products)

                let hoodies_products = response.data.filter((product) => product.product_category === "hoodies")

                setHoodies(hoodies_products)



            }
        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`https://alvinnjiru.alwaysdata.net/api/delete_product/${productId}`);
            if (response.status === 200) {
                // Refresh the products list
                getProducts();
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to delete product");
        }
    };

    // Add to cart function
    // const addToCart = (product) => {
    //     const exists = cart.find(item => item.product_id === product.product_id);

    //     if (!exists) {
    //         setCart([...cart, product]);
    //     } else {
    //         alert("Product already in cart");
    //     }
    // };

    // };

    const filteredProducts = products.filter(product =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.product_category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => { getProducts() }, [])
    return (
        <div className="container-fluid p-0 bg-light min-vh-100">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="container">
                    <p className="lead mb-0">Premium Thrift & Custom Merchandise Collection</p>
                </div>
            </div>

            <Navbar />

            <div className="container">
                {/* Cart & Search Section */}
                <div className="search-container shadow-sm rounded-pill bg-white p-1">
                    <div className="d-flex align-items-center w-100">
                        <div className="flex-grow-1">
                            <input
                                type="text"
                                className="form-control border-0 bg-transparent py-3 px-4 search-pill"
                                placeholder="Search products, categories, styles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="pe-2">
                            <button
                                className="btn btn-dark btn-icon-pill shadow-sm"
                                onClick={() => navigator("/cart")}
                                title="View Shopping Cart"
                            >
                                <div className="position-relative">
                                    <FaShoppingCart size={20} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: '0.6rem' }}>
                                        {cart.length}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {loading && <div className="text-center my-4"><div className="spinner-border text-dark" role="status"></div><p className="text-muted mt-2">{loading}</p></div>}
                {error && <div className="alert alert-danger text-center shadow-sm rounded-4">{error}</div>}

                {searchQuery ? (
                    <div>
                        <div className="text-center my-5">
                            <h2 className="elegant-header">Search Results</h2>
                        </div>
                        <div className="row">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.product_id}
                                        product={product}
                                        img_url={img_url}
                                        addToCart={addToCart}
                                        deleteProduct={deleteProduct}
                                    />
                                ))
                            ) : (
                                <h4 className="text-center w-100 text-muted my-5">No products found matching "{searchQuery}"</h4>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="pb-5">
                        <div className="text-center my-5">
                            <h2 className="elegant-header">404 Merchandise</h2>
                        </div>
                        <div className="row">
                            {merch.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>

                        {/* {merch.map((product) => (
                <div className="col-md-4 justify-content-center mb-4">
                    <div className="card shadow card-margin">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <b className="text-warning">{product.product_cost}Ksh</b>
                            <br />
                        </div>

                        <div className="d-flex justify-content mt-2">
                            <button
                                className="btn btn-dark"
                                onClick={() => navigator("/makepayment", { state: { product } })}
                            >
                                Purchase now
                            </button>

                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => addToCart(product)}
                            >
                                <FaShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            ))} */}


                        <div className="text-center my-5">
                            <h2 className="elegant-header">T-Shirts</h2>
                        </div>
                        <div className="row">
                            {tshirts.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>
                        {/* {tshirts.map((product) => (
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
            ))} */}

                        <div className="text-center my-5">
                            <h2 className="elegant-header">Trousers</h2>
                        </div>
                        <div className="row">
                            {trousers.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>
                        {/* {trousers.map((product) => (
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
            ))} */}

                        <div className="text-center my-5">
                            <h2 className="elegant-header">Shoes</h2>
                        </div>
                        <div className="row">
                            {shoes.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>
                        {/* {shoes.map((product) => (
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
            ))} */}

                        <div className="text-center my-5">
                            <h2 className="elegant-header">Full Outfits</h2>
                        </div>
                        <div className="row">
                            {fulloutfits.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>
                        {/* {fulloutfits.map((product) => (
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
            ))} */}

                        <div className="text-center my-5">
                            <h2 className="elegant-header">Hoodies</h2>
                        </div>
                        <div className="row">
                            {hoodies.map((product) => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                    img_url={img_url}
                                    addToCart={addToCart}
                                    deleteProduct={deleteProduct}
                                />
                            ))}
                        </div>
                        {/* {hoodies.map((product) => (
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
            ))} */}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default GetProductsComponent;