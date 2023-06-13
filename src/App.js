
import './App.css';
import { Navebar } from './components/navebar/Navebar';

import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navebar/>
    <AllRoutes />
    </div>
  );
}

export default App;
