import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
// input: name , email and password
const Register = () => {
    const [formData, setFormData] = useState({
            name:"",
            email: "",
            password: "",
        });
    
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                console.log(formData);
    
            } catch (error) {
                console.error(error);
            }
        };
  return (
    <>
        <div className="form-container">
            <div className="form-header">
                <h3>Sign Up</h3>
            </div>
            <div className="input-container">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                <input type="text" placeholder="email" id="email" value={formData.email} onChange={handleChange} required /> 
                <input type="password" placeholder="password" value={formData.password} onChange={handleChange} required />   
                <div className="botton">
                    <button className="submit" type="submit">SIGN UP</button> 
                </div>  
                <div className="signup">
                    Already Have An Account?<Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register