
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';
import Home from './components/home';
import About from './components/about';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/counter';
function App() {
  return (
    <div> 
      <BrowserRouter>
      <Provider store={store}>
        <Counter></Counter>
      <Link to="/">Home</Link><br></br>
      <Link to="/About"> About</Link><br></br>
      <Link to="/Contact">Contact</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </Provider>
      </BrowserRouter>
    </div>


  )
}

export default App;
