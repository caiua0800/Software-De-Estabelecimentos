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
import CallHelpModal from './Components/CallHelpModal';
import Pedidos from './Components/Pedidos';


function App() {

  const [CartItems, setCartItems] = useState([]);
  const [PedidosList, setPedidosList] = useState([])
  const [callHelp, setCallHelp] = useState(false);
  // const [callBill, setCallBill] = useState(false);

  const cardapio = {

    hamburguer: [
        {
            nome: 'Duplo Bacon',
            src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fduble-bacon.png?alt=media&token=f8e25051-8dcd-42d3-888b-45c929999f67',
            desc: '(2x) 250g costela, bacon, cheader, molho da casa',
            valor: 38.60,
            fav: true
        },
        {
            nome: 'Triple Bacon Cheese',
            src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Ftriple-cheese.png?alt=media&token=5c2bcea8-208d-4566-a47f-ad1f0bc01e92',
            desc: '3 camadas de cheader, bacon crocante, cebola caramelizada, 200g costela',
            valor: 42.20,
            fav: true
        },
        {
          nome: 'Barbecue Hungry',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fbarbecue-hungry.png?alt=media&token=8075d698-a984-41d1-94ee-34a80aafcca2',
          desc: 'Barbecue, 250g Picanha, Queijo Brie',
          valor: 52.50,
          fav: false
        },
        {
          nome: 'Ciri Cascudo',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fcirigueijo.png?alt=media&token=7fb97ed9-a7f2-4ffe-912d-129d3beb896f',
          desc: 'Receita Secreta',
          valor: 28.50,
          fav: false
        }
    ],

    drink: [
      {
        nome: 'Morando Split Vodka',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fmorango-splited.png?alt=media&token=fd8b5046-aca6-4219-941d-0f6c3796c0c7',
        desc: 'Vodka, Morando, Cementes, Adoçante',
        valor: 18.50,
        fav: true,
        alcool: true
      },
      {
        nome: 'Dose Red Lable',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fwisk-gelo.png?alt=media&token=b095f6e0-17c4-4cf3-a15f-6afa75149d46',
        desc: '100ml RED BLACK',
        valor: 15.50,
        fav: false,
        alcool: true
      },
      {
        nome: 'Sucos Naturais',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fnatural-juices.png?alt=media&token=45da2539-5812-4647-b760-74857f5726f4',
        desc: 'Laranja, Morango, Maçã, Abacaxi',
        valor: 8.90,
        fav: true,
        alcool: false
      }
    ]

  }

  return (
    <Router>
      <div className="App">

        <CallHelpModal callHelp={callHelp}/>

        <ContainerPart>

          <LeftNavbar setCallHelp={setCallHelp} title="Logo" />

          <Container>

            <Routes>

              <Route path="/home" element={<Home setCallHelp={setCallHelp} setCartItems={setCartItems} />} />
              <Route path="/favorites" element={<Favorites cardapio={cardapio} setCartItems={setCartItems}  />} />
              
              <Route path="/drink" element={<Drinks cardapio={cardapio} setCartItems={setCartItems}  />} />

              <Route path="/hamburgueres" element={<Hamburgueres cardapio={cardapio} setCartItems={setCartItems}  />} />

              <Route path="/cart" element={<Cart setPedidosList={setPedidosList} setCartItems={setCartItems} items={CartItems} />} />

              <Route path="/pedidos" element={<Pedidos pedidos={PedidosList} />} />

            </Routes>

          </Container>

        </ContainerPart>

      </div>
    </Router>
  );
}

export default App;
