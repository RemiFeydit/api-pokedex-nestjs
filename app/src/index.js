import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Moves from './pages/Moves';
import Abilities from './pages/Abilities';
import PokemonMoves from './pages/PokemonMoves';
import PokemonTypes from './pages/PokemonTypes';
import PokemonAbilities from './pages/PokemonAbilities';
import BaseStats from './pages/BaseStats';
import TypesPage from './pages/TypesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pokemon',
    element: <Pokemon />,
  },
  {
    path: '/basestats',
    element: <BaseStats />,
  },
  {
    path: '/abilities',
    element: <Abilities />,
  },
  {
    path: '/moves',
    element: <Moves />,
  },
  {
    path: '/pokemonmoves',
    element: <PokemonMoves />,
  },
  {
    path: '/pokemontypes',
    element: <PokemonTypes />,
  },
  {
    path: '/pokemonabilities',
    element: <PokemonAbilities />,
  },
  {
    path: '/types',
    element: <TypesPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
