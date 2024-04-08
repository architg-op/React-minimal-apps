import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonLayout from './components/ButtonLayout';

function App() {
  return (
    <div className="mainLayout">
      <input type="text" className="displayBox" />
      <ButtonLayout />
    </div>
  );
}

export default App;
