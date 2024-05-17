import './App.css';
import Container from './Components/Container';
import ContainerPart from './Components/ContainerPart';
import Favorites from './Components/Favorites';
import Home from './Components/Home';
import LeftNavbar from './Components/LeftNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drinks from './Components/Drinks';
import Hamburgueres from './Components/Hamburgueres';
import Cart from './Components/Cart';
import React, { useState, useEffect } from 'react';

function App() {

  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("Cart items updated:", CartItems);
  }, [CartItems]);

  return (
    <Router>
      <div className="App">
        <ContainerPart>

          <LeftNavbar title="Logo" />

          <Container>

            <Routes>

              <Route path="/home" element={<Home setCartItems={setCartItems} />} />
              <Route path="/favorites" element={<Favorites setCartItems={setCartItems}  />} />
              <Route path="/drink" element={<Drinks setCartItems={setCartItems}  />} />
              <Route path="/hamburgueres" element={<Hamburgueres setCartItems={setCartItems}  />} />
              <Route path="/cart" element={<Cart setCartItems={setCartItems} items={CartItems} />} />

            </Routes>

          </Container>

        </ContainerPart>

      </div>
    </Router>
  );
}

export default App;
