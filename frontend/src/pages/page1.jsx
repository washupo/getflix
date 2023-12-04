////////// layout : sider (nav) à gauche en colonne, à droite, une header,un content et un footer /////// 
import React from 'react';
import PersistentDrawerRight from './drawer';
import PersistentDrawerLeft from './drawer';

/* <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/> */


const Page1 = () => {
  return <div>
   <PersistentDrawerLeft />
    </div>
};
export default Page1;


// {/*//palette couleurs à partir du logo:
// /* CSS HEX */
// --lilac: #C295B0ff;
// --tyrian-purple: #550033ff;
// --licorice: #0B0007ff;
// --mulberry: #BE4A90ff;
// --murrey: #7E004Cff;


// /* SCSS HEX */
// $lilac: #C295B0ff;
// $tyrian-purple: #550033ff;
// $licorice: #0B0007ff;
// $mulberry: #BE4A90ff;
// $murrey: #7E004Cff;

// /* SCSS RGB */
// $lilac: rgba(194, 149, 176, 1);
// $tyrian-purple: rgba(85, 0, 51, 1);
// $licorice: rgba(11, 0, 7, 1);
// $mulberry: rgba(190, 74, 144, 1);
// $murrey: rgba(126, 0, 76, 1);*/} 

