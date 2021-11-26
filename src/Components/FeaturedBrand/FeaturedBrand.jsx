import React, { useState, useEffect } from "react";
import HOC from "../../Common/Hoc";

//css file
// import "./UserFinancial.css";

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Button, Grid, Card } from "@material-ui/core";
import Expand from "react-expand-animated";

function FeaturedBrand(props) {
  const Financialdata = [
    {
      image: "...image",
      description: "A substance or combination of substances",
      tittle: "By LivEsdy",
      price: "7$",
      pastcollection: 50 + "%",
      amountdue: "$8",
      label: "",
    },
    {
      image: "...image",
      description: "A substance or combination of substances",
      price: "7$",
      pastcollection: 50 + "%",
      amountdue: "$8",
      label: "",
    },
    {
      image: "...image",
      description: "A substance or combination of substances",
      price: "7$",
      pastcollection: 50 + "%",
      amountdue: "$8",
      label: "",
    },
    {
      image: "...image",
      description: "A substance or combination of substances",
      price: "7$",
      pastcollection: 50 + "%",
      amountdue: "$8",
      label: "",
    },
  ];

  const [addMangeopen, setaddMangeopen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content_padding">
        <Grid className="Component_main_grid p-2 "></Grid>

        <div>
          <div className="mt-2 mb-2">
            <span
              className="hover_cursor"
              onClick={() => setaddMangeopen(!addMangeopen)}
            >
              <i className="fa fa-plus mr-1" />
              Add Featured Brand
            </span>
          </div>

          <Expand open={addMangeopen}>
            <Card className=" mb-2 Card_shadow p-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text-right">
                      <span className="icon_color hover_cursor">
                        <i
                          className="fa fa-times cursor"
                          onClick={() => setaddMangeopen(!addMangeopen)}
                        ></i>
                      </span>
                    </div>

                    <div className="text_filed_heading">Add Description</div>
                    <div className=" mt-1">
                      <input
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
                            type="text"
                            className="form-control "
                            placeholder="Tittle"
                            autoComplete="off"
                          />
                        </div>
                      </Grid>
                      <Grid item md={6}>
                        <div className="text_filed_heading">
                          Select Catagories
                        </div>
                        <div className=" mt-1 mr-2">
                          <div class="form-group">
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>Featured Brands </option>
                              <option>Handpicked Item</option>
                              <option>Deals of the Day</option>
                              <option>Top Categories</option>
                            </select>
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
                            type="text"
                            className="form-control "
                            placeholder="Price"
                            autoComplete="off"
                          />
                        </div>
                      </Grid>
                      <Grid item md={6}>
                        <div className="">
                          <div className="text_filed_heading ">
                            Add Discount
                          </div>
                          <div className=" mt-1">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Discount"
                              autoComplete="off"
                            />
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
                            class="form-control-file"
                            id="exampleFormControlFile1"
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
                    <Button variant="contained" className="button_formatting">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Expand>
        </div>
        <div className="table_foramtitng mt-1 mb-2 col-md-12 table_class">
          <TableContainer>
            <Table
              className=""
              aria-label="customized table"
              id="table_outside_border"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" className="table_header">
                    Product Image
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Add Description
                  </StyledTableCell>
                  <StyledTableCell align="center" className="table_header">
                    Add Price
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Add Discount
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Add Price-2
                  </StyledTableCell>
                  <StyledTableCell align="left" className="table_header">
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Financialdata.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell align="left">{row.image}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price}
                      <div className="text-center"></div>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.pastcollection}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.amountdue}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <i class="fa fa-edit mr-1"></i>
                      <i class="fa fa-trash"></i>
                      <span
                        className="pl-2"
                        onClick={() => props.history.push("/addmore")}
                      >
                        + Add more
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default HOC(FeaturedBrand);
