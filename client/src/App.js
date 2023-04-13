import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp/>
      <SignIn/>
    </div>
  );
}

export default App;
