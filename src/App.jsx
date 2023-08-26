import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Contador from './components/Contador';

const data = [
  { id: 1, nombre: 'Geralt', imagen: 'https://media.fortniteapi.io/images/a85cc36d483ace298e4fdfb2611d3a50/transparent.png', descripcion: "Cazador de monstruos con mutaciones, lucha por la moralidad en un mundo sombrío."},
  { id: 2, nombre: 'Yennefer', imagen: 'https://fortnite-api.com/images/cosmetics/br/character_fishbowl/icon.png', descripcion: "Poderosa hechicera con un pasado turbulento y una búsqueda de identidad."},
  { id: 3, nombre: 'Ciri', imagen: 'https://i.pinimg.com/originals/a2/a3/e6/a2a3e69e1b86bc099a921a03fb250487.jpg', descripcion: "Princesa con el destino de la profecía, posee habilidades mágicas y guerreras."},
  { id: 4, nombre: 'Jaskier', imagen: 'https://vignette.wikia.nocookie.net/witcher/images/7/76/People_Dandelion.png/revision/latest/zoom-crop/width/240/height/240?cb=20141119145921', descripcion: "Bardo carismático y amigo de Geralt, narrador colorido de sus hazañas."},
  { id: 5, nombre: 'Triss', imagen: 'https://vignette.wikia.nocookie.net/wiedzmin/images/a/a7/W2_SS_Triss_2.png/revision/latest/top-crop/width/240/height/240?cb=20180220211409', descripcion: "Hechicera amiga de Geralt, experta en magia y política mágica."},
  { id: 6, nombre: 'Emhyr', imagen: 'https://th.bing.com/th/id/OIP.TWnyzFJS7Qd8LwsDQA6Q1QAAAA?pid=ImgDet&rs=1', descripcion: "Emperador de Nilfgaard, busca controlar el continente, con conexiones misteriosas."}
];

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="App">
      <h1>Taller 1 - Card y Contador</h1>
      <h2>Personajes de "The Witcher</h2>
      <Contador actualizaContador={updateCount} />
      <div className="cards">
        {data.map((personaje) => (
          <Card key={personaje.id} data={personaje} count={count} />
        ))}
      </div>
    </div>
  );
}

export default App;
