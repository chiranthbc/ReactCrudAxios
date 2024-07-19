import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";

import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Contact Manager
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />

          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
