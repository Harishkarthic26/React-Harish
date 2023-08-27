import React from "react"
import { useState } from "react"

function Form() {
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setErrors] = useState('')



    const handleSubmit = (event) => {
        event.preventDefault();
        const error = valiadate();
        setErrors(error);
        if (Object.keys(error).length === 0) {

        }
    }
    const valiadate = () => {
        const error = {};

        if (!fname) {
            error.fname = "First Name is required";
        } else if ("A-Z") {

        }
        else {
            error.fname = "";
        }
        if (!email) {
            error.email = "Email id is must";
        } else if ("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/") {

        }
        else {
            error.email = "";
        }
        if (!Password) {
            error.Password = "Password is required";
        } else if ("Password.length < 8 ") {

        }
        else {
            error.Password = "";
        }

    }

    return (
        <div>
            <h1>FORM VALIDATION</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="Full Name" /> <br />
                <lable>Email Id</lable>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="acb@123.com" /><br />
                {error.email}<div className="error"></div>
                <label>Password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br />
                <button>submit</button>

            </form>
        </div>
    )
}
export default Form