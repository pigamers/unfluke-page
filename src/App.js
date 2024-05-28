
import Leaderboard from "./components/Leaderboard";
import NextTop from "./components/NextTop";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <hr className="bg-black h-1 w-11/12 m-auto" />
      <NextTop />
      <div className="text-center my-3 py-5">
        <h1 className="text-6xl font-bold my-10">Leaderboard</h1>
        <p className="text-lg font-medium">Incididunt ullamco magna id exercitation ullamco fugiat nulla sunt labore. Deserunt voluptate tempor dolor sunt voluptate ex.</p>
      </div>
      <Leaderboard />
      <hr className="my-8 h-1 bg-black w-3/4 m-auto" />
    </div>
  );
}

export default App;
