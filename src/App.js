import './styles/app.css';
import VisitorComponent from './components/VisitorComponent'
import SecurityComponent from './components/SecurityComponent'
import CameraStatisticsComponent from './components/CameraStatisticsComponent';
import WarningComponent from './components/WarningComponent';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <VisitorComponent />
          <SecurityComponent />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'47px'}}>
          <CameraStatisticsComponent />
          <WarningComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
