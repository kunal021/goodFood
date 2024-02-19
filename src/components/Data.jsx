/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Data({ query }) {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [save, setSave] = useState([]);

  console.log(save);

  useEffect(() => {
    async function getRecipe() {
      let URL;

      if (query.trim() != "") {
        if (query.length === 1) {
          URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
        } else {
          URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        }
        try {
          setIsLoading(true);
          const res = await axios.get(URL);
          console.log(res.data);
          setRecipe(res.data.meals);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      }
    }

    getRecipe();
  }, [query]);

  useEffect(() => {
    // Load saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recipe"));
    if (savedRecipes) {
      setSave(savedRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(save));
  }, [save]);

  if (query.trim() === "") {
    return (
      <div className="flex justify-center items-center text-center m-20 text-lg sm:text-2xl font-bold">
        Please enter the recipe name
      </div>
    );
  }

  if (recipe === null && !isLoading) {
    return (
      <div className="flex justify-center items-center m-20 text-lg sm:text-2xl font-bold">
        No recipe found
      </div>
    );
  }

  const handleSave = (data) => {
    const isDuplicate = save.some((el) => el.idMeal === data.idMeal);
    if (!isDuplicate) {
      setSave((prevSave) => [...prevSave, data]);
      alert("Recipe Saved");
    } else if (isDuplicate) {
      alert("Already Saved");
    } else {
      return;
    }
  };

  return (
    <div className="bg-amber-300 flex flex-col flex-wrap justify-center items-center">
      <div className="mt-20 text-xl sm:text-2xl font-bold">
        Total results found: {recipe.length}
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
          recipe.map((data) => (
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
                  onClick={() => handleSave(data)}
                  className="flex flex-wrap justify-center text-center items-center px-3 py-2 mb-6 text-l font-bold border-4 border-black rounded-2xl hover:bg-amber-300"
                >
                  Save
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Data;
