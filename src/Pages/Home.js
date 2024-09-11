import React from "react";
import "./Home.css";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div id="Home" className="Home">
        <div className="home-content">
          <div className="coffee_festival">
            <div className="coffee_text">
              <p className="coffee">
                COFFEE </p>
                <p className="festival">FESTIVAL
              </p>
              <p className="body_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                sem viverra aliquet eget sit amet tellus.
              </p>
            </div>
          </div>
          <div className="white_line"></div>
        </div>

        <div className="promotion_div">
          <div className="promotion">Promotions</div>

          <div className="promotion_light_bg">
            <div className="paddTop-20px " />
            <Grid container>
              <Grid item xs={12} lg={4}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    {" "}
                    <img src={require("../images/promotion1.png")} />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className="para1 class1">
                      <p className="title">LOREM IPSUM 1</p>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    {" "}
                    <img src={require("../images/promotion2.png")} />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className="para1">
                      <p className="title">LOREM IPSUM 1</p>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    {" "}
                    <img src={require("../images/promotion3.png")} />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className="para1">
                      <p className="title">LOREM IPSUM 1</p>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
   
  );
};

export default Home;
