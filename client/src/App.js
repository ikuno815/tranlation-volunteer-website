import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import IndividualPage from './pages/IndividualPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider  } from './context/AuthContext';
import { RequestContextProvider } from './context/RequestContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RequestContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
          }></Route>
          <Route path='/request-page/:requestId' element={
            <IndividualPage/>
          }></Route>
          <Route path='/mypage' element={<UserProfile/>}></Route>
        </Routes>
        </RequestContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
