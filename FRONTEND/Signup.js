import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "/api/signup", // Use Vercel Rewrite to avoid CORS
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/"); // Navigate to login/home
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
        } catch (error) {
            console.log(error);
            const errorMsg = error.response?.data?.message || error.response?.data?.error || "Signup failed. Check network.";
            handleError(errorMsg + (error.response?.data?.checkpoint ? ` (${error.response.data.checkpoint})` : ""));
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });
    };

    return (
        <div className="signup-container">
            <div className="signup-row">
                <div className="signup-col">
                    <img src="media/images/signup.png" alt="Open Account" />
                </div>
                <div className="signup-col">
                    <h1>Signup now</h1>
                    <p className="text-muted">Or <Link to="/login" style={{textDecoration:"none"}}>Login</Link> to your existing account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="email">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={handleOnChange}
                            />
                        </div>
                        <button type="submit" className="btn-continue">Submit</button>
                    </form>
                    <div style={{ marginTop: "1.5rem" }}>
                        <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                            By proceeding, you agree to the Terms and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signup;
