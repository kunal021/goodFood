/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import arrow from "../assets/arrow.svg";

function RecipeDetail() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  // const history = useHistory();

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    async function getData() {
      const res = await axios.get(URL);
      console.log(res.data);
      setData(res.data.meals[0]);
    }

    getData();
  }, [id]);

  const keys = Object.keys(data);
  const ingredients = keys.filter((element) =>
    /^strIngredient(?:[1-9]|1\d|20)$/.test(element)
  );

  const measurement = keys.filter((element) =>
    /^strMeasure(?:[1-9]|1\d|20)$/.test(element)
  );

  if (!data || !data.strInstructions) {
    return (
      <div className="my-40 flex justify-center items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#1e293b"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  return (
    <>
      {/* image and links */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-32 mb-4 relative">
        <div className="text-center md:w-[20rem] w-[15rem]">
          <p className="pb-8 text-xl font-bold">{data.strMeal}</p>
          <img
            src={data.strMealThumb}
            className="md:h-[20rem] md:w-[20rem] h-[15rem] w-[15rem] rounded-2xl"
          />
        </div>
        {/* <p>{data.strMeal}</p> */}
        <div className="flex md:flex-col justify-center items-center gap-6">
          <Link
            to={data.strSource}
            target="__blank"
            className="my-4 md:mx-4 text-l font-bold px-4 py-2 border-4 border-black rounded-xl text-center"
          >
            Source
          </Link>
          <Link
            to={data.strYoutube}
            target="__blank"
            className="my-4 md:mx-4 text-l font-bold px-4 py-2 border-4 border-black rounded-xl text-center bg-red-500"
          >
            YouTube
          </Link>
        </div>
        <button
          onClick={goBack}
          className="absolute top-0 left-2 md:top-2 md:left-10 border-2 md:border-4 border-black rounded-full p-1 md:p-2"
        >
          <img src={arrow} className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>

      {/* line break starts */}
      <div className="bg-black w-full h-1"></div>
      {/* line break ends */}

      {/* ingredients */}
      <div className="flex flex-col justify-center items-center bg-amber-300">
        <p className="p-5 text-xl font-bold">Ingredients</p>
        <div className="flex flex-wrap justify-center items-center w-[80vw]">
          {/* <p className="p-5 text-base font-normal">ingredients</p> */}
          {ingredients.map(
            (el, idx) =>
              data[el] !== "" &&
              data[el] !== null && (
                <div key={idx} className="p-5 text-l font-bold">
                  {/* {console.log(data[el])} */}
                  {idx + 1}: {data[el]} - {data[measurement[idx]]}
                </div>
              )
          )}
        </div>
      </div>

      {/* line break starts */}
      <div className="bg-black w-full h-1"></div>
      {/* line break ends */}

      {/* recipe */}
      <div className="flex flex-col justify-center items-center">
        <p className="p-5 text-xl font-bold">Method</p>
        <div className="text-lg leading-relaxed font-semibold w-[80vw]">
          {data.strInstructions.split(".").map(
            (sentence, idx) =>
              sentence !== "" && (
                <p key={idx} className="mb-4">
                  <span className="text-lg font-bold">Step{idx + 1}: </span>
                  {sentence.trim()}
                </p>
              )
          )}
        </div>
      </div>

      {/* line break starts */}
      <div className="bg-black w-full h-1"></div>
      {/* line break ends */}

      {/* other info */}
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center bg-amber-300">
        {data.strArea && (
          <p className="p-3 text-xl font-semibold break-all text-center">
            Area: {data.strArea}
          </p>
        )}
        {data.strCategory && (
          <p className="p-3 text-xl font-semibold break-all text-center">
            Category: {data.strCategory}
          </p>
        )}
        {data.strTags && (
          <p className="p-3 text-xl font-semibold break-all text-center">
            Tags: {data.strTags}
          </p>
        )}
      </div>
    </>
  );
}

export default RecipeDetail;
