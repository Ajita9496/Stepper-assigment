import './App.css';
import { Sidebar } from './components/steps/Sidebar';
import { StepForm } from './components/steps/Index';
import { Provider } from "react-redux";
import store from "./state-management/store";

function App() {
  return (
    <Provider store={store}>
    <div className="main-container">
    <div className="desktop-app">
      <Sidebar />
      <div className="step-form-container">
        <StepForm /> 
      </div>
    </div>
    </div>
  </Provider>
  );
}
export default App;
