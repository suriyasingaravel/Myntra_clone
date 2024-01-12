import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://myntra-backend-cyan.vercel.app/products/`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {data.map((el) => (
        <div className="mb-2" key={el.id}>
          <img className="w-full" src={el.image_url} alt={el.subtext} />
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
