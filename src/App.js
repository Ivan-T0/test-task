import { Route, Routes } from "react-router-dom";
import FormPage from "./page/FormPage";
import FinancialHelp from "./components/FinancialHelp/FinancialHelp";
import MaterialHelp from "./components/MaterialHelp/MaterialHelp";
import Do from "./components/DoHelp/DoHelp";
import Volunteering from "./components/Volunteering/Volunteering";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormPage />}>
          <Route path="/FinancialHelp" element={<FinancialHelp />} />
          <Route path="/Do" element={<Do />} />
          <Route path="/MaterialHelp" element={<MaterialHelp />} />
          <Route path="/Volunteering" element={<Volunteering />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
