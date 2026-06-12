import React ,{ useState } from 'react'
import {Link} from 'react-router-dom'
// input: email and password
const Login = () => {
    const [formData, setFormData] = useState({
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
                <h3>Log In</h3>
            </div>
            <div class="input-container">
                <input type="text" placeholder="email" value={formData.email} onChange={handleChange} required /> 
                <input type="password" placeholder="password" value={formData.password} onChange={handleChange} required />   
                <div className="botton">
                    <button className="submit" type="submit">LOG IN</button> 
                </div>  
                <div className="signup">
                    Don't Have An Account?<Link to="/signup" > sign up</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login