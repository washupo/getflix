import React from 'react'
import Navbar from './drawer.jsx'
import Button from '@mui/material/Button';

//// theme provider pour le theme couleur //////////
const Mynav = () => {
  return (
    <div>
      <Button color="primary">Bouton principal</Button>
      <Button color="secondary">Bouton secondaire</Button>
    </div>
  );
};

const Page1 = () => {
  return (<>
      <Navbar />
      <div>

      <Mynav />


      </div>
    </>
  )}

export default Page1

