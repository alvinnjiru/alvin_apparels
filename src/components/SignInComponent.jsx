import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInComponent = () => {

    //use state variables to store our data in
    let [email, updateEmail] = useState("");
    let [password, updatePassword] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    //create variable for use navigate
    let navigate = useNavigate();

    // a new function to handle requests when someone presses the signin button
    const handleSubmit = async (e) => {
        //prevent default behaviour of reloading 
        e.preventDefault();


        //notify the user to wait
        setLoading("Submiting data! Please wait...");
        setError("");
        setSuccess("");


        //try send data to server
        try {
            // create new form data in key-value pair
            const user_input = new FormData();
            user_input.append("email", email);
            user_input.append("password", password);


            // send data to server
            const response = await axios.post("https://alvinnjiru.alwaysdata.net/api/signin", user_input);

            console.log(response)

            //response status == 200 means the request has been received
            if (response.status === 200) {
                if (response.data.user) {
                    localStorage.setItem("user", JSON.stringify(response.data.user))

                    setSuccess(response.data.message)
                    navigate("/")

                }else {
                setLoading("")
                setError(response.data.message)
                }
            } 

        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading("")
        }

    }

    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Sign in </h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handleSubmit} >
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        required
                        //on change event listener
                        onChange={(e) => { updateEmail(e.target.value) }}

                        value={email}
                    />
                    <br />

                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-control"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password}
                    /> <br />

                    <button className="btn btn-dark">Sign In</button>
                    <br />
                    <Link to="/signup">Don't have an account? Sign up</Link>

                </form>

            </div>

        </div>
    );
}

export default SignInComponent;