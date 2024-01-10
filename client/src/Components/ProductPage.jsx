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
    <div className="grid grid-cols-5 gap-4">
      {data.map((el) => (
        <div key={el.id}>
          <img className="" src={el.image_url} alt={el.subtext} />
          <h3>{el.brand}</h3>
        </div>
      ))}
    </div>
  );
}
