import axios from "axios"
import React,{useState} from "react"
import { Link , useNavigate} from "react-router-dom"
const Signin=()=>{
    const navigate= useNavigate()
    // Declare the two states here 
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    // eslint-disable-next-line
    {/* 3 states of posting data  */}
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    // function to handle submit 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        // create digital envelope 
        const formdata=new FormData()

        // append
        formdata.append("email", email)
        formdata.append("password", password)

        try {
            const response=await axios.post("https://higgs.alwaysdata.net/api/signin" ,formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login/signin is successful we save the user to local storage
            // nb redirect user to homepage(get products)
            if(response.data.user){
                // login success
                localStorage.setItem("user", JSON.stringify(response.data.user))
                // redirect the user to homepage
                navigate("/")
            }
            else{
                // login failed
                setSuccess(response.data.message)
            }



        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }

    return(
        <div className="row mt-4  justify-content-center">
            <div className="card shadow p-4 col-md-5">
                <h1>Sign In ❇️</h1>
                {/* bind the variables */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="email" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/> <br /> 
                    <input type="password" placeholder="Password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/> <br /> <br />
                    <button type="Submit"className="col-md-12 btn btn-dark">Sign In</button> <br /> <br />
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>


            </div>

        </div>
    )
}
export default Signin