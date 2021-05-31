import NavBar from "./components/navbar/NavBar";
import ProfilePhoto from "./components/profile_photo/ProfilePhoto";
import ProfileContent from "./components/profile_content/ProfileContent";
import "./App.css";

function App() {
  return (
    <div id="home" className="App">
      <NavBar />
      <main className="main">
        <ProfilePhoto />
        <ProfileContent />
      </main>
    </div>
  );
}

export default App;
