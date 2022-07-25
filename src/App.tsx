import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Form from "./pages/form";
import Summary from "./pages/summary";
import NotFound from "./pages/notFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/form" element={<Form />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
