import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Register =(props) => {
    const [Email, setEmail]= useState('');
    const [pass, setPass] = useState ('');
    const [Name, setName] = useState('');
    const [Confirm, setConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pass !== Confirm) {
            alert("password do not match.");
        }
    }

    return(
<div className=" roundede-4 auth-form-container">
    <h2>Register</h2>
<div className="form-group">
    <label htmlfor="Name">Full name</label>
    <input Name="Name"id="Name" placeholder="Full name"/><br></br>
    </div>
    <div className="form-group">
    <label htmlfor="Email">Email</label>
    <input value={Email} onChange={(e) => setEmail(e.target.value)}
     type="Email" placeholder="youemail@gmail.com" id="email" name="Email"/><br></br>
    </div>
    <div className="form-group">
    <label htmlfor="password">password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)}
     type="password" placeholder="******" id="password" name="password"/><br></br>
    </div>
    <div className="form-group">
    <label htmlfor="Confirm password">Confirm password</label>
    <input Name={Confirm} onChange={(e) =>Confirm(e.target.value)} 
    type="Confirm password" placeholder="******" id="Confirm password" name="Confirm password"/>
    </div><br></br>
    <button type="Submit">Register</button>
   <Link to="/login">
    Already have an account?Login here.
</Link>
</div>

        
    )
}
export default Register