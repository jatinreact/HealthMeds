import React from "react";
import HOC from "../../Common/Hoc";
import { withRouter } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";
import AddBanner from "../AddBanner/AddBanner";
import FeaturedBrand from "../FeaturedBrand/FeaturedBrand";
import Topcatagories from "../Topcatagories/Topcatagories";
import Handpicked from "../Handpicked/Handpicked";
import Daydeals from "../Daydeals/Daydeals";

import "./Home.css";
const Home = (props) => {
  //local array
  const home = [
    { show: "Add Product", link: "productList" },
    { show: "Add Banner", link: "addBanner" },
    { show: "Order details", link: "orderstatus" },
    { show: "Payment details", link: "payment" },
    { show: "Payment Gatway", link: "gatway" },
    { show: "Add Catagories", link: "catagories" },
    { show: "Add Brand", link: "brand" },
  ];
  return (
    <div className="content_padding">
      <div className="main_div ">
        <div className="container">
          <div className="row">
            {home.map((item, index) => (
              <div className="col-md-4  col-lg-4">
                <Card
                  className="main_card Card_shadow "
                  onClick={() => props.history.push(`${item.link}`)}
                >
                  <div className="main_content ">
                    <p>
                      <span className="">
                        <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                      </span>
                      {item.show}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HOC(Home));
