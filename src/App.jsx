import WorkerList from "./components/UI/WorkerList";
import AddWorker from "./components/Workers/AddWorker";

function App() {
  return <div className="App">
    <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
   <AddWorker/> 
   <WorkerList workers={[]}/>
  </div>;
}

export default App;
