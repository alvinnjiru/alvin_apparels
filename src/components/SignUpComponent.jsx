import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUpComponent = () => {

    let [username, updateUsername] = useState("")
    let [email, updateEmail] = useState("")
    let [phone, updatePhone] = useState("")
    let [password, updatePassword] = useState("")

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        //prevent default behavior...reloading when one 
        //presses the sign up cause react is an spa
        e.preventDefault();

        //notify user to wait   
        setError("")
        setSuccess("")
        setLoading("Submitting data! Please wait.....")

        //confirm user input....and when done as the developer u should remove the consolr.logs
        console.log(username, email, phone, password)

        //try send data to server
        try {
            // create form data
            const user_data = new FormData()
            user_data.append("username", username);
            user_data.append("email", email);
            user_data.append("phone", phone);
            user_data.append("password", password);

            //use axios to send data to server
            const response = await axios.post("https://alvinnjiru.alwaysdata.net/api/signup", user_data)
            console.log(response)
            if (response.status === 200) {
                setSuccess(response.data.message);
                setLoading("");

                updateUsername("")
                updateEmail("")
                updatePhone("")
                updatePassword("")
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading("");

        }
    }


    return (
        <div className="row justify-content-center mt-4">
            <Navbar />
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Username"
                        required
                        onChange={(e) => {
                            updateUsername(e.target.value)
                        }}
                        //the value is username because it is what the user has entered
                        value={username}
                    />
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        onChange={(e) => { updateEmail(e.target.value) }}
                        value={email}
                    />
                    <br />
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your number"
                        required
                        onChange={(e) => { updatePhone(e.target.value) }}
                        value={phone}
                    />
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        onChange={(e) => { updatePassword(e.target.value) }}
                        value={password}
                    />
                    <br />

                    <button className="btn btn-dark">
                        Sign Up
                    </button>
                    <br />

                    <Link to="/signin" >Already have an account? Sign in</Link>

                </form>
            </div>
        </div>
    );
}

export default SignUpComponent;