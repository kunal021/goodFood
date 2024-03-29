import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import arrow from "../assets/arrow.svg";

function Saved() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Retrieve data from local storage
    const storedData = localStorage.getItem("recipe");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  console.log(data);

  const handleDelete = (id) => {
    const updatedRecipe = data.filter((item) => item.idMeal !== id);
    setData(updatedRecipe);
    localStorage.setItem("recipe", JSON.stringify(updatedRecipe));
    alert("Recipe Deleted");
  };

  const goBack = () => {
    window.history.back();
  };

  if (data.length === 0 && !isLoading) {
    return (
      <div className="flex justify-center items-center m-40 text-lg sm:text-2xl font-bold">
        No recipe found
      </div>
    );
  }

  return (
    <div className="bg-amber-300 flex flex-col flex-wrap justify-center items-center">
      <div className="mt-24 mb-4 text-xl sm:text-2xl font-bold">
        Total saved recipes {data.length}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {isLoading ? (
          <div className="my-40">
            <InfinitySpin
              visible={true}
              width="200"
              color="#1e293b"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        ) : (
          data.map((data) => (
            <div
              key={data.idMeal}
              className="m-10 flex flex-col flex-wrap justify-center items-center border-4 border-black rounded-3xl bg-white"
            >
              <img
                src={data.strMealThumb}
                alt={data.title}
                className="h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] rounded-t-3xl"
              />
              <div className="py-6 text-l font-bold w-[15rem] sm:w-[20rem] text-center">
                {data.strMeal}
              </div>
              <div className="flex justify-center items-center gap-4">
                <Link
                  to={`/${data.idMeal}`}
                  className="flex flex-wrap justify-center text-center items-center px-3 py-2 mb-6 text-l font-bold border-4 border-black rounded-2xl hover:bg-amber-300"
                >
                  Details
                </Link>
                <button
                  onClick={() => handleDelete(data.idMeal)}
                  className="flex flex-wrap justify-center text-center items-center px-3 py-2 mb-6 text-l font-bold border-4 border-black rounded-2xl hover:bg-amber-300"
                >
                  Delete
                </button>
              </div>
              <button
                onClick={goBack}
                className="absolute top-24 left-2 md:left-10 border-2 md:border-4 border-black rounded-full p-1 md:p-2"
              >
                <img src={arrow} className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Saved;
