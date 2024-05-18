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
import ModalGeral from './Components/ModalGeral';

function App() {

  const [CartItems, setCartItems] = useState([]);
  const [PedidosList, setPedidosList] = useState([])
  const [callHelp, setCallHelp] = useState(false);
  const [ModalGeralShow, setModalGeralShow] = useState('d-none')
  const [ModalGeralText, setModalGeralText] = useState('texto')

  const cardapio = {

    hamburguer: [
        {
            nome: 'Duplo Bacon',
            src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fbacon.jpeg?alt=media&token=207e31a0-cb78-4867-922b-f9783c067922',
            desc: '(2x) 250g costela, bacon, cheader, molho da casa',
            valor: 38.60,
            fav: true
        },
        {
            nome: 'Triple Bacon Cheese',
            src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fcheader.jpeg?alt=media&token=f93e0484-2701-4ba3-b717-95546065ab5e',
            desc: '3 camadas de cheader, bacon crocante, cebola caramelizada, 200g costela',
            valor: 42.20,
            fav: true
        },
        {
          nome: 'Barbecue Hungry',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fbabecue.jpg?alt=media&token=a9dab445-0ef5-4e04-8638-b1d5b1a63986',
          desc: 'Barbecue, 250g Picanha, Queijo Brie',
          valor: 52.50,
          fav: false
        },
        {
          nome: 'Ciri Cascudo',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fciri%20cascudo.jpeg?alt=media&token=7a90c931-6b19-46e5-9c67-b1fe5ea19bb7',
          valor: 28.50,
          desc: 'Receita Secreta',
          fav: false
        },
        {
          nome: 'X-TUDO',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fx-tudo.jpg?alt=media&token=f6c27a76-0608-42a8-ad2e-c81be1fdef20',
          valor: 32.50,
          desc: '(2x) hamburguer de costela, salsicha, bacon, barbecue, cebolas caramelizadas, cheader',
          fav: false
        },
        {
          nome: 'Chicken Salad',
          src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fhamburguer%2Fhamburguer-frango-salad.jpeg?alt=media&token=40e17e40-6e48-4aec-b612-b263b1c21747',
          desc: 'Hamburguer Crocante de Franco, Salada, Molho Verde',
          valor: 34.00,
          fav: true
        }
        
    ],

    drink: [
      {
        nome: 'Morando Split Vodka',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fmorango.jpeg?alt=media&token=bb65ba13-fcb4-4bb9-bff3-912e928919e6',
        desc: 'Vodka, Morando, Cementes, Adoçante',
        valor: 18.50,
        fav: true,
        alcool: true
      },
      {
        nome: 'Dose Red Lable',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fred-lable.jpg?alt=media&token=e645abb6-bf3e-4202-b73a-22252c9acb9e',
        desc: '100ml RED LABLE',
        valor: 15.50,
        fav: false,
        alcool: true
      },
      {
        nome: 'Sucos Naturais',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fsucos.jpeg?alt=media&token=590534f3-5bd4-4da8-b4bf-27fe6f05f9c6',
        desc: 'Abacaxi, Laranja, Morango, Abacaxi com Hortelã',
        valor: 8.90,
        fav: true,
        alcool: false
      },
      {
        nome: 'Sex On the Beach',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fsex-on-the-beach.jpeg?alt=media&token=cc6ff6b1-7fae-49da-ac2e-4f5b58d3df9c',
        desc: 'Vodka, Licor, suco de polpa',
        valor: 29.20,
        fav: true,
        alcool: true
      },
      {
        nome: 'Negroni',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fnegroni.jpeg?alt=media&token=5664fcf6-f286-4e3d-9c2e-33c8b62ea7ac',
        desc: 'Gim e Varmut Russo',
        valor: 35.50,
        fav: false,
        alcool: true
      },
      {
        nome: 'Mojito',
        src: 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cardapio%2Fdrinks%2Fmojito-foto.jpg?alt=media&token=9220eff3-44af-4aa5-9998-1eeb2d7cac4a',
        desc: 'Hortelã, Açucar, Limão e Água com Gás',
        valor: 18.90,
        fav: true,
        alcool: true
      }
    ]

  }

  return (
    <Router>
      <div className="App">

        <CallHelpModal callHelp={callHelp}/>

        <ModalGeral addClass={ModalGeralShow} text={ModalGeralText}></ModalGeral>

        <ContainerPart>

          <LeftNavbar setCallHelp={setCallHelp} title="Logo" />

          <Container>

            <Routes>

              <Route path="/" element={<Home setCallHelp={setCallHelp} setCartItems={setCartItems} />} />
              <Route path="/favorites" element={<Favorites setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio} setCartItems={setCartItems}  />} />
              
              <Route path="/drink" element={<Drinks setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio} setCartItems={setCartItems}  />} />

              <Route path="/hamburgueres" element={<Hamburgueres setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio} setCartItems={setCartItems}  />} />

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
