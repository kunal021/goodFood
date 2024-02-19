import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RecipeDetail from "./components/RecipeDetail";
import BackToTop from "./components/BackToTop";
import Saved from "./components/Saved";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-0 w-full lg:bg-amber-300/90 z-10">
        <Navbar />
      </div>
      <div>
        {/* if navbar than mt-32 */}
        <Routes>
          <Route
            index
            element={
              <Home
                input={input}
                setInput={setInput}
                query={query}
                setQuery={setQuery}
                navigate={navigate}
              />
            }
          />
          <Route path="/:id" element={<RecipeDetail />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
