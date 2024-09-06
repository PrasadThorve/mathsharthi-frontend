import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pallavi changes
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import PdfPage from "./pages/PdfPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AIWriter from "./pages/Aiwriter";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AppContext } from "./context";
import DisplayPage from "./pages/DisplayPage";
import PrivacyPolicy from "./pages/TermAndPrivacy";
import Subscribe from './pages/Subscribe';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AppContext.Provider value={{ selectedItem, setSelectedItem }}>
      <BrowserRouter>
        <Routes>
          <Route path="/display" element={<DisplayPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms"  element={<PrivacyPolicy />}/>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chatwithdoc"
            element={
              <ProtectedRoute>
                <PdfPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aiwriter"
            element={
              <ProtectedRoute>
                <AIWriter />
              </ProtectedRoute>
            }
          />
          <Route path="/subscribe" 
          element={
            <ProtectedRoute>
              <Subscribe />
            </ProtectedRoute>
          }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
