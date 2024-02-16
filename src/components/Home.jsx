// import Navbar from "./Navbar";
import Hero from "./Hero";
import Input from "./Input";
import Data from "./Data";

// eslint-disable-next-line react/prop-types
function Home({ input, setInput, query, setQuery }) {
  return (
    <div>
      <Hero />
      <Input input={input} setInput={setInput} setQuery={setQuery} />
      <Data query={query} />
    </div>
  );
}

export default Home;
