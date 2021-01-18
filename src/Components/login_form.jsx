import React, { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("");
    const [valid, setValid] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (/\S+@\S+\.\S+/.test(email)) {
            console.log(email);
            setValid("login successful")
        } else {
            setValid("invalid email");
        }
        setEmail("");
    }

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p class="prompt">Email Address</p>
            <p class={valid === "login successful" ? "valid" : "invalid"}>{valid}</p>
            <input class="field" value={email} onChange={handleChange} /><br />
            <label>
                <input class="remember" type="checkbox" />
                Remember me
                <br />
            </label>
            <button>Sign In</button>
        </form >
    )
}
export default Login;