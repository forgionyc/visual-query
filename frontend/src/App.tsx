import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./Components/views/Login";
import Dashboard from "./Components/views/Dashboard";
import MySavedQueries from "./Components/views/MySavedQueries";
import AllVisualQueries from "./Components/views/AllVisualQueries";
import DataExplorer from "./Components/views/DataExplorer";
import Documentation from "./Components/views/Documentation";

function App() {
  return (
    <>
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myqueries" element={<MySavedQueries />} />
          <Route path="/queries" element={<AllVisualQueries />} />
          <Route path="/dataexplorer" element={<DataExplorer />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
