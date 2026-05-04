import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";

const Getproducts=()=>{
     let navigate = useNavigate();
    // declare our states 
    const [loading,setLoading]=useState("")
    const [products,setProducts]=useState([])
    const[error,setError]=useState("")
    const[search,setSearch]=useState("")
    const[visibleCount,setVisibleCount]=useState(8)


    // define function to filter products 
    const filtered_products=products.filter((item)=>
        item.product_name.toLowerCase().includes(search.toLowerCase())||
        item.product_description.toLowerCase().includes(search.toLowerCase())
    );

    // define the function to get products
    const getproducts= async()=>{
        setLoading("Loading products..")
        try {
            const response=await axios.get("https://sophiehiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
        }
    }

    // call the function
    useEffect(()=>{
        getproducts()
    },[])
    
    console.log(products)

    const imagepath="https://sophiehiggs.alwaysdata.net/static/images/"

    return(
        <div className="row m-3">

           
            {/* carousel goes here */}
            <Carousel/>
             {/* search filter goes here */}
            <div className="row justify-content-center mt-4 mb-1">
                <input
                className="form control w-50"
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <h1 className="text-success mt-5">AVAILABLE PRODUCTS ✨</h1>
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-danger">{error}</h2>

            {/* map here */}
            {filtered_products.slice(0,visibleCount).map((product)=>(
                
                
                <div className="col-md-3 mb-4">
                    <div className="card shadow  h-100 text-start">

                        {/* image goes here */}
                        <img src={imagepath+product.product_photo} alt="" style={{height:"300px" , objectFit:"cover"}}/>
                        <div className="card-body">
                            <h2 className="text-secondary  ">{product.product_name}</h2>
                            <p>{product.product_description}</p>
                            <b className="text-dark">Ksh{product.product_cost}</b> <br /> <br />
                            <button className="btn btn-danger "  onClick={()=>navigate("/makepayment" ,{state:{product}})}>Purchase now!!</button>
                        </div>
                    </div>
                </div>
                
            ))}

            {/* load more goes here */}
            <div className="text-center mt-3 mb-4">
                {visibleCount<filtered_products.length && (
                    <button 
                    className="btn btn-danger"
                    onClick={()=>setVisibleCount(visibleCount+8)}
                    >
                        Load More
                    </button>
                )}
            </div>

            {/* footer goes here */}
            <Footer></Footer>
        </div>
    )
}
export default Getproducts