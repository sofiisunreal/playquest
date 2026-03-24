import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";

const Getproducts=()=>{
     let navigate = useNavigate();
    // declare our states 
    const [loading,setLoading]=useState("")
    const [products,setProducts]=useState([])
    const[error,setError]=useState("")

    // define the function to get products
    const getproducts= async()=>{
        setLoading("Loading products..")
        try {
            const response=await axios.get("http://sophiehiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            
        }
    }

    // call the function
    useEffect(()=>{
        getproducts()
    },[])
    
    console.log(products)

    const imagepath="http://sophiehiggs.alwaysdata.net/static/images/"

    return(
        <div className="row m-3">
            {/* carousel goes here */}
            <Carousel/>
            <h1 className="text-success mt-5">AVAILABLE PRODUCTS ✨</h1>
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-danger">{error}</h2>

            {/* map here */}
            {products.map(singleproduct=>(
                
                
                <div className="col-md-3 mb-4">
                    <div className="card shadow  h-100 text-start">

                        {/* image goes here */}
                        <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"300px" , objectFit:"cover"}}/>
                        <div className="card-body">
                            <h2 className="text-secondary  ">{singleproduct.product_name}</h2>
                            <p>{singleproduct.product_description}</p>
                            <b className="text-dark">Ksh{singleproduct.product_cost}</b> <br /> <br />
                            <button className="btn btn-danger "  onClick={()=>navigate("/makepayment" ,{state:{singleproduct}})}>Purchase now!!</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Getproducts