import axios from "axios"
import React ,{use, useState} from "react"

const Addproduct=()=>{
    // declare the states here 
    const [product_name,setProductName]=useState("")
    const [product_description,setProductDescription]=useState("")
    const [product_cost,setProductCost]=useState("")
    const [product_photo,setProductPhoto]=useState("")

    // 3 states for posting data
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // function to handle submit 
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setLoading("Please Wait..")

        // create digital envelope 
        const formdata = new FormData()

        // append 
        formdata.append("product_name", product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)
        formdata.append("product_photo",product_photo)

        // try and catch error 
        try {
            const response=await axios.post("http://sophiehiggs.alwaysdata.net/api/addproduct",formdata)
            setSuccess(response.data.message)
            setLoading("")

        } catch (error) {
            
        }
    }
    return(
        <div className="row justify-content-center mt-2">
            <div className="col-md-8 card shadow p-4">
                <h1 className="text-dark">Add product 👾 </h1>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter product name" onChange={(e)=>setProductName(e.target.value)}/> <br />
                    <textarea name="" id="" className="form-control" placeholder="Enter product description" onChange={(e)=>setProductDescription(e.target.value)}></textarea> <br />
                    <input type="number" className="form-control" placeholder="Enter product cost" onChange={(e)=>setProductCost(e.target.value)}/> <br />
                    <input type="file" accept="image/*" className="form-control" placeholder="No file chosen" onChange={(e)=>setProductPhoto(e.target.files[0])}/> <br />
                    <button type="submit" className="btn btn-dark col-md-12">Add product</button> <br />
                </form>

            </div>
        </div>
    )
}
export default Addproduct
