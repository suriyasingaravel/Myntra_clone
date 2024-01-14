import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/products/action";

export default function ProductPage() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const products= useSelector((store)=> store.productReducer.products)
  const loading = useSelector((store)=> store.productReducer.isLoading);
  const error= useSelector((store)=> store.productReducer.isError);
  const dispatch = useDispatch()


  const paramObj ={
      params:{
        category: searchParams.getAll("category") || [],
      }
  }

  useEffect(() => {
    // axios
    //   .get(`https://myntra-backend-cyan.vercel.app/products/`, paramObj)
    //   .then((res) => {
    //     // console.log(res.data);
    //     setData(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setLoading(false);
    //   });

    dispatch(getProducts)

      
  }, [searchParams]);

  if (loading) {
    return (
     <p className="text-center"> 
     {/* <img
     src="https://lollypop.design/wp-content/uploads/2022/09/logoanimated100.gif"
     className="text-center"
     alt="Loading Animation" /> */}
      Loading...
      </p>

      
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {products.map((el) => (
        <div className="mb-2" key={el._id} >
          <Link to={`/singlepage/${el._id}`}>  <img className="w-full" src={el.image_url} alt={el.subtext} /> </Link>
          <div className="ml-2">
            <h3 className="text-[16px] mt-1.5 font-bold">{el.brand}</h3>
            <p className="text-[13px]">{el.subtext}</p>
            <span className="text-[13.5px] font-bold">Rs. {el.price}</span>
            <strike className="text-[13px] mx-1">Rs.{el.mrp}</strike>
            <span className="text-[12px] ml-1 text-[#ff905a]">
              ({el.offer}% OFF)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
