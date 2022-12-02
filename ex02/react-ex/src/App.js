import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main"
import SignUp from './pages/SignUp/SignUp';
import Login from "./pages/Login"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/member/login" element={<Login />}></Route>
          <Route path="/member/signup" element={<SignUp />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
