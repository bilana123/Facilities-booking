import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Register =(props) => {
    const [Email, setEmail]= useState('');
    const [pass, setPass] = useState ('');
    const [Name, setName] = useState('');
    const [Confirm, setConfirm] = useState('');
   
 
 
        const handlePasswordChange =(event) => {
            setPass(event.target.value);
        };
        const handleConfirmChange =(event) => {
            setConfirm(event.target.value);
 // Validate form data here
   };
        const handleSubmit = (e) => {
        e.preventDefault();
        if (pass ===Confirm){
            alert('Password match!');
        }else{
            alert('password does not match');
        }
    };


    return(
   <div className=" roundede-4 auth-form-container">
    
    <form onSubmit={handleSubmit}>

    <label htmlfor="Name">Full name</label>
    <input Name="Name"id="Name" placeholder="Full name"  Fill up the required/><br></br>
    

    <label htmlfor="Email">Email</label>
    <input value={Email} onChange={(e) => setEmail(e.target.value)}
     type="Email" placeholder="youemail@gmail.com" id="email" name="Email" Fill up the required/><br></br>
     
    <label htmlfor="password">password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)}
     type="password" placeholder="******" id="password" name="password" Fill up the required/><br></br>
  

   <label htmlfor="Confirm">Confirm password</label>
    <input Name={Confirm} onChange={(e) =>Confirm(e.target.value)} 
    type="Confirm password" placeholder="******" id="Confirm password" name="Confirm password" Fill up the required/> <br></br><br></br>

    <button type="Submit">Register</button>
    </form>
   <Link to="/login">
    Already have an account?Login here.       
</Link>
</div>




        
    )
}
export default Register