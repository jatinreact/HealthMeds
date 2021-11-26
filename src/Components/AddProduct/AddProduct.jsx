import React, { useState, useEffect } from "react";
import HOC from "../../Common/Hoc";
import { Button, Grid, Card } from "@material-ui/core";

import axios from "axios";

const ProductList = (props) => {
  console.log("props data:::::", props);
  //pagetype
  let pagetype = props.location.state.PageType;

  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [itemCategory, setitemCategory] = useState("");
  const [pack_size, setpack_size] = useState("");
  const [country_origin, setcountry_origin] = useState("");
  const [disclaimer, setdisclaimer] = useState("");
  const [brand_name, setbrand_name] = useState("");
  const [manufacturer_name, setmanufacturer_name] = useState("");
  const [price, setprice] = useState("");
  const [discount_price, setdiscount_price] = useState("");

  const [product_Form, setproduct_Form] = useState("");

  const [profile, setprofile] = useState(null);
  const [editId, seteditId] = useState("");

  /// get api categeries add
  const [subcategries, setsubcategries] = useState([]);

  useEffect(() => {
    try {
      let url = "https://secure-river-15887.herokuapp.com/viewCategory";

      axios.get(url).then(
        (res) => {
          setsubcategries(res.data);
          console.log("data cattttt:::", res);
        },
        (error) => {}
      );
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (pagetype === "Edit") {
      let data = props.location.state.data;
      console.log("image arr", data.productPictures);
      setdescription(data.description);
      settitle(data.title);
      setcategory(data.category);
      setitemCategory(data.itemCategory);
      setpack_size(data.pack_size);
      setcountry_origin(data.country_origin);
      setdisclaimer(data.disclaimer);
      setbrand_name(data.brand_name);
      setmanufacturer_name(data.manufacturer_name);
      setprice(data.price);
      setdiscount_price(data.discount_price);
      setproduct_Form(data.product_Form);
      setprofile(data.productPictures);
      seteditId(data._id);
    }
  }, []);

  const addProduct = () => {
    if (pagetype === "Edit") {
      let url = `https://secure-river-15887.herokuapp.com/editProduct/${editId}`;

      const fd = new FormData();
      fd.append("description", description);
      fd.append("title", title);
      fd.append("category", category);
      fd.append("itemCategory", itemCategory);
      fd.append("pack_size", pack_size);
      fd.append("disclaimer", disclaimer);
      fd.append("country_origin", country_origin);
      fd.append("brand_name", brand_name);
      fd.append("manufacturer_name", manufacturer_name);
      fd.append("price", price);
      fd.append("discount_price", discount_price);
      fd.append("productForm", product_Form);

      //********* HERE IS THE CHANGE ***********

      fd.append("currentImage", profile);

      axios
        .post(url, fd)
        .then(
          (res) => {
            console.log("data response:::", res);
            props.history.goBack();
          },

          (error) => {
            console.log("data response error:::", error);
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } else {
      let url = "https://secure-river-15887.herokuapp.com/addProduct";

      const fd = new FormData();
      fd.append("description", description);
      fd.append("title", title);
      fd.append("category", category);
      fd.append("itemCategory", itemCategory);
      fd.append("pack_size", pack_size);
      fd.append("disclaimer", disclaimer);
      fd.append("country_origin", country_origin);
      fd.append("brand_name", brand_name);
      fd.append("manufacturer_name", manufacturer_name);
      fd.append("price", price);
      fd.append("discount_price", discount_price);
      fd.append("productForm", product_Form);

      //********* HERE IS THE CHANGE ***********
      for (let i = 0; i < profile.length; i++) {
        fd.append("myField", profile[i]);
      }

      axios
        .post(url, fd)
        .then(
          (res) => {
            console.log("data response:::", res);
            props.history.goBack();
          },

          (error) => {
            console.log("data response error:::", error);
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    }
  };

  return (
    <div>
      <div className="content_padding">
        <Grid className="Component_main_grid p-2 "></Grid>

        <div>
          <Card className=" mb-2 Card_shadow p-3">
            <div className="card_admissiondetails_height">
              <div className="textfiled_margin">
                <div className="card_content_instition">
                  <div className="text_filed_heading">Add Description</div>
                  <div className=" mt-1">
                    <input
                      value={description}
                      onChange={(e) => {
                        setdescription(e.target.value);
                      }}
                      type="text"
                      className="form-control "
                      placeholder="Details..."
                      autoComplete="off"
                    />
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Add Tittle</div>
                      <div className=" mt-1 mr-2">
                        <input
                          value={title}
                          onChange={(e) => {
                            settitle(e.target.value);
                          }}
                          type="text"
                          className="form-control "
                          placeholder="Tittle"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="text_filed_heading">Catagories</div>
                      <div className=" mt-1 mr-2">
                        <div class="form-group">
                          <select
                            value={category}
                            onChange={(e) => {
                              setcategory(e.target.value);
                            }}
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option value="">Select </option>
                            <option value="Featured Brands">
                              Featured Brands
                            </option>
                            <option value="Handpicked Item">
                              Handpicked Item
                            </option>
                            <option value="Deals of the Day">
                              Deals of the Day
                            </option>
                            <option value="Top Categories">
                              Top Categories
                            </option>
                          </select>
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Sub Catagories</div>
                      <div className=" mt-1 mr-2">
                        <div class="form-group">
                          <select
                            value={itemCategory}
                            onChange={(e) => {
                              setitemCategory(e.target.value);
                            }}
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Personal Care</option>
                            {subcategries.map((item, index) => (
                              <option>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="text_filed_heading">Pack Size</div>
                      <div className=" mt-1 mr-2">
                        <div className=" mt-1 mr-2">
                          <input
                            value={pack_size}
                            onChange={(e) => {
                              setpack_size(e.target.value);
                            }}
                            type="text"
                            className="form-control "
                            placeholder="weight"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">
                        Country of origin
                      </div>
                      <div className=" mt-1 mr-2">
                        <div class="form-group">
                          <select
                            value={country_origin}
                            onChange={(e) => {
                              setcountry_origin(e.target.value);
                            }}
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Country </option>
                            <option>India</option>
                            <option>China</option>
                          </select>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="text_filed_heading">Disclaimer</div>
                      <div className="mr-2 mt-1">
                        <input
                          value={disclaimer}
                          onChange={(e) => {
                            setdisclaimer(e.target.value);
                          }}
                          type="text"
                          className="form-control "
                          placeholder="Disclaimer"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Brand Name</div>
                      <div className="mr-2 mt-1">
                        <input
                          value={brand_name}
                          onChange={(e) => {
                            setbrand_name(e.target.value);
                          }}
                          type="text"
                          className="form-control "
                          placeholder="Add Brand"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="text_filed_heading">
                        Manufacturer Name
                      </div>
                      <div className="">
                        <div className=" mt-1">
                          <input
                            value={manufacturer_name}
                            onChange={(e) => {
                              setmanufacturer_name(e.target.value);
                            }}
                            type="text"
                            className="form-control "
                            placeholder="Manufactures"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Add Price</div>
                      <div className="mr-2 mt-1">
                        <input
                          value={price}
                          onChange={(e) => {
                            setprice(e.target.value);
                          }}
                          type="text"
                          className="form-control "
                          placeholder="Price"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="">
                        <div className="text_filed_heading ">Product Form</div>

                        <div className=" mt-1 mr-2">
                          <div class="form-group">
                            <select
                              value={product_Form}
                              onChange={(e) => {
                                setproduct_Form(e.target.value);
                              }}
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>Product </option>
                              <option>Capsule</option>
                              <option>Powder</option>
                              <option>Tablet</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading mt-3 mb-2">
                        Add Product Image
                      </div>
                      <div className="mr-2 mt-1">
                        <input
                          type="file"
                          class="form-control"
                          multiple
                          onChange={(e) => setprofile(e.target.files)}
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>
                      <div className="mt-3">
                        <div className="text_filed_heading ">
                          Discount Price
                        </div>
                        <div className=" mt-1">
                          <input
                            value={discount_price}
                            onChange={(e) => {
                              setdiscount_price(e.target.value);
                            }}
                            type="text"
                            className="form-control "
                            placeholder="Price"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-3 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addProduct}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HOC(ProductList);
