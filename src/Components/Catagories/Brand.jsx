import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import HOC from "../../Common/Hoc";
import axios from "axios";
import Expand from "react-expand-animated";

//loader
import Loder from "../Loder/Loder";

//dialog box
import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Brand(props) {
  const classes = useStyles();
  const [EditDailogOpen, setEditDailogOpen] = useState(false);
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  ////dialogbox
  const [opendialogbox, setopendialogbox] = useState(false);

  const [addbrand, setaddbrand] = useState("");
  const [brandimage, setbrandimage] = useState(null);
  const [radiovalue, setradiovalue] = useState("Yes");

  const radioHandler = (event) => {
    setradiovalue(event.target.value);
    console.log("radiobtn", event.target.value);
  };

  ////brand post first
  const addsubcategries = () => {
    let url = "https://secure-river-15887.herokuapp.com/addBrand";
    setisloading(true);

    const fd = new FormData();

    fd.append("name", addbrand);
    fd.append("featured_brand", radiovalue);

    //********* HERE IS THE CHANGE ***********

    fd.append("myField", brandimage);

    axios
      .post(url, fd)
      .then(
        (res) => {
          console.log("data categriesfield:::", res);
          setisupdated(!isupdated);
          setaddbrand("");
          setbrandimage(null);
        },

        (error) => {
          console.log("data response categriesfield:::", error);
        }
      )
      .catch((e) => {
        console.log("data response categriesfield:::", e);
      });
  };

  //get api

  /// get api order
  const [brandproduct, setbrandproduct] = useState([]);

  useEffect(() => {
    try {
      let url = "https://secure-river-15887.herokuapp.com/viewBrand";
      setisloading(true);
      axios.get(url).then(
        (res) => {
          setbrandproduct(res.data);
          console.log("datagetbyadmin:::", res);
          setisloading(false);
        },
        (error) => {
          setisloading(false);
        }
      );
    } catch (error) {
      setisloading(false);
    }
  }, [isupdated]);

  /// delete banner

  const deletebrand = (item) => {
    let id = item._id;

    let url = `https://secure-river-15887.herokuapp.com/deleteBrand/${id}`;

    axios
      .get(url)
      .then(
        (res) => {
          console.log("data deletebrand:::", res);
          setisupdated(!isupdated);
          setisloading(false);
        },

        (error) => {
          setisloading(false);
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        setisloading(false);
        console.log("data response error:::", e);
      });
  };

  ///edit brand

  return (
    <>
      <div>
        <div className="content_padding">
          <h3 className="mb-3" onClick={() => setopendialogbox(!opendialogbox)}>
            <i class="fa fa-plus-square mr-2"></i>
            Add Brand
          </h3>
          <Expand open={opendialogbox}>
            <Card className=" mb-2 Card_shadow p-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text_filed_heading">Add Brand</div>
                    <div className=" mt-1">
                      <input
                        type="text"
                        value={addbrand}
                        onChange={(e) => {
                          setaddbrand(e.target.value);
                        }}
                        className="form-control "
                        placeholder="Add Brand"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text_filed_heading mt-3">Select Image</div>
                    <div className=" mt-1">
                      <input
                        type="file"
                        onChange={(e) => setbrandimage(e.target.files[0])}
                        className="form-control "
                        placeholder=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="text_filed_heading mt-3">Add Top Brand</div>
                  <label className="radio_font mr-2">
                    <input
                      className="mr-2"
                      type="radio"
                      name="optradio"
                      checked={radiovalue === "Yes"}
                      value="Yes"
                      onChange={(e) => radioHandler(e)}
                    />
                    Yes
                  </label>
                  <label className="radio_font">
                    <input
                      className="mr-2"
                      type="radio"
                      name="optradio"
                      checked={radiovalue === "No"}
                      value="No"
                      onChange={(e) => radioHandler(e)}
                    />
                    No
                  </label>

                  <div className="mt-2 pb-3 ">
                    <Button
                      variant="contained"
                      className="button_formatting mt-3"
                      onClick={addsubcategries}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Expand>

          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Add Brand</TableCell>
                  <TableCell>Brand Type</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {brandproduct.map((item, index) => (
                  <TableRow>
                    <TableCell>
                      <img
                        class="d-block"
                        style={{ height: "40px", width: "70px" }}
                        src={`https://secure-river-15887.herokuapp.com/${item.image}`}
                      />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.featured_brand}</TableCell>

                    <TableCell>
                      <span className="">
                        <i
                          class="fa fa-trash mr-3"
                          onClick={() => deletebrand(item)}
                        ></i>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>
                        <i
                          class="fa fa-edit mr-1 pl-3"
                          onClick={() => setEditDailogOpen(!EditDailogOpen)}
                        ></i>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          <Dialog
            aria-labelledby="form-dialog-title"
            open={EditDailogOpen}
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Brand
              <span
                className="float-right icon_color"
                onClick={() => setEditDailogOpen(!EditDailogOpen)}
              >
                <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
              </span>
            </DialogTitle>
            <DialogContent>
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text_filed_heading">Add Brand</div>
                    <div className=" mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Sub Catagories"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text_filed_heading mt-3">Select Image</div>
                    <div className=" mt-1">
                      <input
                        type="file"
                        className="form-control "
                        placeholder=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="text_filed_heading mt-3">Add Top Brand</div>
                  <label className="radio_font mr-2">
                    <input className="mr-2" type="radio" name="optradio" />
                    Yes
                  </label>
                  <label className="radio_font">
                    <input className="mr-2" type="radio" name="optradio" />
                    No
                  </label>

                  <div className="mt-2 pb-3 ">
                    <Button
                      variant="contained"
                      className="button_formatting mt-3"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button className="button_formatting">Cancel</Button>
              <Button className="button_formatting">Save</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <Loder loading={isloading} />
    </>
  );
}
export default HOC(Brand);
