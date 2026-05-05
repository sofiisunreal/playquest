import axios from "axios"
import React,{useState} from "react"
import { Link } from "react-router-dom"

const Signup=()=>{
    // declare our states here 
    const[username, setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const [strength,setStrength]=useState("")

    const[loading, setLoading]= useState("")
    const[success,setSuccess]=useState("")
    const[error, setError]=useState("")
    // function to handle submit 
    const  handlesubmit=async (e)=>{
        e.preventDefault()
        setLoading("Please Wait...")

        // create empty digital envelope to store user inputs
        const formdata= new FormData()
        // append/add 
        formdata.append("username",username)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("phone", phone)

        try {
            const response= await axios.post("https://higgs.alwaysdata.net/api/signup", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            
        }
    }

    // function for password strength checker
    const checkPasswordStrength=(password)=>{
        if(password.length<4){
            setStrength("Weak")
        }
        else if(password.length<8){
            setStrength("Medium")
        }
        else{
            setStrength("Strong")
        }
    }
    return(
        <div className="row mt-3 justify-content-center">
            <div className="col-md-6 card shadow p-4 ">
                <h1>Signup 🎏</h1>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter Username " onChange={(e) =>setUsername(e.target.value)} /> <br />
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) =>setEmail(e.target.value)}/> <br />
                    <input type="password" className="form-control" placeholder="Enter Password" 
                    onChange={(e) =>{
                        setPassword(e.target.value);
                        checkPasswordStrength(e.target.value);
                    }}/> <br />
                    {password && (
                        <p
                        style={{
                            color:
                            strength==="Weak"
                            ? "red"
                            : strength==="Medium"
                            ?"orange"
                            :"green",
                        }}
                        >
                            Password Strength:{strength}
                        </p>
                    )
                    
                    }
                    <input type="number" className="form-control" placeholder="Enter Phone" onChange={(e) =>setPhone(e.target.value)}/> <br />
                    <button type="submit" className="btn btn-dark col-md-12">SignUp</button> <br /> <br />
                    <p>Already have an account? <Link to='/signin'>Signin</Link></p>
                </form>
            </div>

        </div>
    )
}
export default Signup
