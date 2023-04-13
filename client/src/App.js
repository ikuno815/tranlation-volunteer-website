import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider  } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
