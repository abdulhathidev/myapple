import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold underline">My apple - front end</h1>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
