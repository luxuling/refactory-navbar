import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div
        id="home"
        className="flex items-center justify-center w-full h-screen">
        Home Page
      </div>
      <div
        id="about"
        className="flex items-center justify-center w-full h-screen">
        About Page
      </div>
      <div
        id="gallery"
        className="flex items-center justify-center w-full h-screen">
        Gallery Page
      </div>
    </div>
  );
}

export default App;
