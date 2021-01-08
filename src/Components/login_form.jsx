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
            <input placeholder="email" value={email} onChange={handleChange} /><br />
            <label>
                <input type="checkbox" label="something" />
                remember me
                <br />
            </label>
            <button>Sign in</button>
        </form >
    )
}
export default Login;