import {ProductsPage} from "./pages/ProductsPage";
import {AdminPanel} from "./pages/AdminPanel";
import {LoginPage} from "./pages/LoginPage"
import { MyProvider } from './context/myContext';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MyProvider><ProductsPage/></MyProvider>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/admin' element={<AdminPanel/>}></Route> 
      <Route path='*' element={<h1>!Not Found 404</h1>}></Route> 
    </Routes>
  )
}

export default App
