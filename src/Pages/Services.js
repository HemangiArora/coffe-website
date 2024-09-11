import React from "react";
import "./Services.css";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
     <Navbar />
     <div id="Services">
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item lg={6} xs={12}>
              <div className="premium_coffee">
                <div className="premium_div">
                  <p className="premium_title1">
                    PREMIUM
                    <br /> COFFEE
                  </p>
                  <p className="premium_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut sem viverra aliquet eget sit amet tellus.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src={require("../images/premium_coffee.png")}
                className="p_coffee"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12}>
          <div className="matcha_latte">
            <div className="matcha_light_bg"></div>
            <img
              className="matcha_img"
              src={require("../images/matcha_latte.png")}
            />
            <div className="matcha_div">
              <p className="matcha">MATCHA</p>
              <p className="latte">LATTE</p>
              <p className="latte_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                sem viverra aliquet eget sit amet tellus.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              {/*  */}
              <div className="sweet_light_bg"></div>
              <img
                className="sweet_img"
                src={require("../images/sweet_moments.png")}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="sweet_moments">
              <div className="sweet_text">
                <p className="sweet">Sweet <br/>Moments</p>
                <p className="s_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut sem viverra aliquet eget sit amet tellus.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container>
            

            <Grid item xs={12} lg={6}>
             

              <div className="weekend_discount">
                <div className="weekend_text">
                  <p className="weekend">WEEKEND <br/>DISCOUNT</p>
                  <p className="w_text">
                    Or eu in elit. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Mauris
                    in erat justo. Nullam ac urna eu felis dapibus condimentum
                    sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.
                    Proin condimentum fermentum nunc. Etiam pharetra, erat sed
                    fermentum
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
            <div className="weekend_light_bg"></div>
              <img
                src={require("../images/weekend_discount.png")}
                className="weekend_img"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </>
  
  );
};

export default Services;
