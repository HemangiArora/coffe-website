import React from "react";
import { Grid } from "@mui/material";
import "./OurProducts.css";
import Navbar from "../components/Navbar";

const OurProducts = () => {
  return (
    <>
      <Navbar />
      <div id="OurProducts">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <img
              src={require("../images/second_last_coffee.png")}
              className="sl_coffee"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="menu1 flt-right">
              <div className="menu1_line"></div>

              <div className="menu1_text">
                <p className="menu1_coffee">COFFEE</p>
                <p className="menu1_text">
                  <span className="text-style-1">
                    Food Name Here ................... $ 00.00
                  </span>{" "}
                  &nbsp;&nbsp;
                </p>
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
                <span className="text-style-1">
                  Food Name Here ................... $ 00.00
                </span>{" "}
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
                <span className="text-style-1">
                  Food Name Here ................... $ 00.00
                </span>{" "}
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div
              className="menu1 flt-left"
              style={{ backgroundColor: "#f9e5c8 !important" }}
            >
              <div className="menu1_line"></div>

              <div className="menu1_text">
                <p className="menu1_coffee">COFFEE</p>
                <p className="menu1_text">
                  <span className="text-style-1">
                    Food Name Here ................... $ 00.00
                  </span>{" "}
                  &nbsp;&nbsp;
                  {/* <span className="text-style-2"></span>
    &nbsp;&nbsp;<span className="text-style-3"></span>
    <span className="text-style-4"></span> */}
                </p>
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
                <span className="text-style-1">
                  Food Name Here ................... $ 00.00
                </span>{" "}
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
                <span className="text-style-1">
                  Food Name Here ................... $ 00.00
                </span>{" "}
                <p className="text-style-5">
                  This is Photoshop's version &nbsp;of Lorem Ipsum.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              src={require("../images/special_coffee.png")}
              className="s2_coffee"
            />
          </Grid>
        </Grid>

        <div className="last_coffee_icon">
          <img
            src={require("../images/last_coffee_icon.png")}
            className="last_icon"
          />
        </div>

        <div className="dark_color"></div>
      </div>
    </>
  );
};

export default OurProducts;
// import React from "react";
// import { Grid } from "@mui/material";
// import "./OurProducts.css";
// import Navbar from "../components/Navbar";

// const OurProducts = () => {
  

//   return (
    
//     <>
     
//      <Navbar />
//       <div id="OurProducts">
//         <Grid container>
//           <Grid item xs={12} lg={6}>
//             <img
//               src={require("../images/second_last_coffee.png")}
//               className="sl_coffee"
//             />
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <div className="menu1 flt-right">
//               <div className="menu1_line"></div>

//               <div className="menu1_text">
//                 <p className="menu1_coffee">COFFEE</p>
//                 <p className="menu1_text">
//                   <span className="text-style-1">
//                     Food Name Here ................... $ 00.00
//                   </span>{" "}
//                   &nbsp;&nbsp;
//                 </p>
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//                 <span className="text-style-1">
//                   Food Name Here ................... $ 00.00
//                 </span>{" "}
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//                 <span className="text-style-1">
//                   Food Name Here ................... $ 00.00
//                 </span>{" "}
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//         <Grid container>
//           <Grid item xs={12} lg={6}>
//             <div
//               className="menu1 flt-left"
//               style={{ backgroundColor: "#f9e5c8 !important" }}
//             >
//               <div className="menu1_line"></div>

//               <div className="menu1_text">
//                 <p className="menu1_coffee">COFFEE</p>
//                 <p className="menu1_text">
//                   <span className="text-style-1">
//                     Food Name Here ................... $ 00.00
//                   </span>{" "}
//                   &nbsp;&nbsp;
//                   {/* <span className="text-style-2"></span>
//     &nbsp;&nbsp;<span className="text-style-3"></span>
//     <span className="text-style-4"></span> */}
//                 </p>
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//                 <span className="text-style-1">
//                   Food Name Here ................... $ 00.00
//                 </span>{" "}
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//                 <span className="text-style-1">
//                   Food Name Here ................... $ 00.00
//                 </span>{" "}
//                 <p className="text-style-5">
//                   This is Photoshop's version &nbsp;of Lorem Ipsum.
//                 </p>
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <img
//               src={require("../images/special_coffee.png")}
//               className="s2_coffee"
//             />
//           </Grid>
//         </Grid>

//         <div className="last_coffee_icon">
//           <img
//             src={require("../images/last_coffee_icon.png")}
//             className="last_icon"
//           />
//         </div>

//         <div className="dark_color"></div>
//       </div>
//     </>
//   );
// };

// export default OurProducts;
// import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
// import { Grid } from '@mui/material';
// import Navbar from '../components/Navbar';
// import axios from 'axios'; // Import Axios library
// import "./OurProducts.css";

// const OurProducts = () => {
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     // Fetch category data from the Node.js backend
 
//     fetch('http://localhost:8080/api/products')
//       .then(response => response.json())
//       .then(data => setProductData(data))
//       .catch(error => console.error('Error fetching product data:', error));
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div id="OurProducts">
//         <Grid container>
//           <Grid item xs={12} lg={6}>
//             <img
//               src={require("../images/second_last_coffee.png")}
//               className="sl_coffee"
//             />
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <div className="menu1 flt-right">
//               <div className="menu1_line"></div>

//               <div className="menu1_text">
//               <p className="menu1_coffee">COFFEE</p>
//                 <p className="menu1_text">
//                   <span className="text-style-5">
//                   <table style={{ marginLeft: '200px', marginTop:'-10px', fontSize:'18px'}}>
//       <thead>
//         <tr>
         
//         </tr>
//       </thead>
//       <tbody>
//       {productData.slice(0, 11).map((product, index) => (
//       <tr key={index}>
//         <td>{product.pname}</td>
//         <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}</td>
//       </tr>
//     ))}
//       </tbody>
//     </table>
//                   </span>
//                   &nbsp;&nbsp;
//                 </p>
                
//                {" "}
                
//                {" "}
                
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//         <Grid container>
//           <Grid item xs={12} lg={6}>
//             <div
//               className="menu1 flt-left"
//               style={{ backgroundColor: "#f9e5c8 !important" }}
//             >
//               <div className="menu1_line"></div>

//               <div className="menu1_text">
//                 <p className="menu1_coffee">COFFEE</p>
//                 {/* <p className="menu1_text">
//                   <span className="text-style-1">
//                     Food Name Here ................... $ 00.00
//                   </span>{" "} */}
//                 {/* made cahges */}
//                   {/* <span className="text-style-2"></span>
//     &nbsp;&nbsp;<span className="text-style-3"></span>
//     <span className="text-style-4"></span> 
//                 </p>*/}
//                 <p className="text-style-5">
//                 <table style={{ marginLeft: '10px', marginTop:'-35px', fontSize:'18px'}}>
//       <thead>
//         <tr>
         
//         </tr>
//       </thead>
//       <tbody>
//       {productData.slice(12, 22).map((product, index) => (
//       <tr key={index}>
//         <td>{product.pname}</td>
//         <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹{product.price}</td>
//       </tr>
//     ))}
//       </tbody>
//     </table>
//                 </p>
//                 {" "}
                
//                 {" "}
                
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={12} lg={6}>
//             <img
//               src={require("../images/special_coffee.png")}
//               className="s2_coffee"
//             />
//           </Grid>
//         </Grid>

//         <div className="last_coffee_icon">
//           <img
//             src={require("../images/last_coffee_icon.png")}
//             className="last_icon"
//           />
//         </div>

//         <div className="dark_color"></div>
//       </div>
//     </>
//   );
// };
      

// export default OurProducts;

