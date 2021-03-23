import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function Navbar() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setData(result.data);
          console.log(data)
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  return <div>
      {/* <Counter data={data} /> */}
  </div>;
}

export default Navbar;
