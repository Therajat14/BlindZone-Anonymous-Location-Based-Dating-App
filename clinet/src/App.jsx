import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <>
      <h1 class="bg-sky-700 p-0.5 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Aman Madrchod apna Kaam kab krega tu...
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
