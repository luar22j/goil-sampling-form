import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Form from "./pages/Tally";
import Home from "./pages/Home";
import ThanksModal from "./components/home/ThanksModal";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const location = useLocation();
  const [showThanksModal, setShowThanksModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("success") === "1") {
      setShowThanksModal(true);
    } else {
      setShowThanksModal(false);
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {showThanksModal && <ThanksModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
      <Analytics />
    </Router>
  );
}
