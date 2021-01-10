import React, { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        setEmail("");
    }

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p class="prompt">Email Address</p>
            <input class="field" value={email} onChange={handleChange} /><br />
            <label>
                <input class="remember" type="checkbox" label="something" />
                Remember me
                <br />
            </label>
            <button>Sign In</button>
        </form >
    )
}
export default Login;