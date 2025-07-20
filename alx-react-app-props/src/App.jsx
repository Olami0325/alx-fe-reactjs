// import { useState } from 'react'
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import React from 'react';
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      {/* <WelcomeMessage /> */}
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> */}
    </>
  );
}

export default App;
