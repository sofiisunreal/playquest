import axios from "axios"
import { useState } from "react"
import {useLocation} from "react-router-dom"

const Mpesapayment=()=>{
    const {singleproduct}=useLocation().state||{}
    const imagepath="http://sophiehiggs.alwaysdata.net/static/images/"

    // declare your states here 
    const [phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // function to make payment 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("Loading...")

        // create digital envelope
        const formdata=new FormData

        // append
        formdata.append("phone", phone)
        formdata.append("amount", singleproduct.product_cost)

        // try and catch 
        try {
            const response= await axios.post("http://higgs.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccess(response.data.message)
            setLoading("")

        } catch (error) {
            setError("something went wrong")
            setLoading("")
        }
    }

    return(
        <div className="row justify-content-center">

            <h1 className="text-success">Make Payment - Lipa na Mpesa</h1>
            <div className="col-md-6 card shadow p-4">
            <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"300px" , objectFit:"contain"}}/>

                <div className="card-body text-start">
                    <h1 className="text-info">{singleproduct.product_name}</h1>
                    <p>{singleproduct.product_description}</p>
                    <b className="text-warning">{singleproduct.product_cost}</b> <br />

                    {/* bind the variable */}
                    <h2 className="text-warning">{loading}</h2>
                    <h2 className="text-success">{success}</h2>
                    <h2 className="text-danger">{error}</h2>


                    
                    <form action="" onClick={handlesubmit}>
                        <input type="number" className="form-control" placeholder="Enter phone +254 XXX XXX XXX" onChange={(e)=>setPhone(e.target.value)}/> <br /> 
                        <button className="btn btn-success " type="submit">Make Payment</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Mpesapayment