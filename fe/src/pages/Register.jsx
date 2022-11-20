import React from 'react'
import { Link } from 'react-router-dom'

// import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/home">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
                <p>
                    <label>Your fullname</label><br/>
                    <input type="text" name="fullname" required />
                </p>

                <p>
                    <label>Your phonenumber</label><br/>
                    <input type="text" name="phone" required />
                </p>

                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
            
        </div>
    )

};
