import "./App.css";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import ServiceSearch from "./components/ServiceSearch";

function App() {
  return (
    <div className="App">
      <ServiceForm />
      <ServiceSearch />
      <ServiceList />
    </div>
  );
}

export default App;