import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
