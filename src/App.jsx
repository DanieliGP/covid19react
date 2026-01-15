import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;