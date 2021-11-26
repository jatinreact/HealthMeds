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

function Catagories(props) {
  const classes = useStyles();

  const [EditDailogOpen, setEditDailogOpen] = useState(false);
  const [Editcategries, setEditcategries] = useState(false);
  const [isupdated, setisupdated] = useState(false);

  const [isloading, setisloading] = useState(false);

  //handle click  for radio button
  const radioHandler = (event) => {
    setradiovalue(event.target.value);
    console.log("radiobtn", event.target.value);
  };

  ////dialogbox
  const [opendialogbox, setopendialogbox] = useState(false);
  const [Editsubcategries, setEditsubcategries] = useState("");
  const [Editprofile, setEditprofile] = useState(null);
  const [Editradiovalue, setEditradiovalue] = useState("");

  const editcategoriesmain = (row) => {
    setEditcategries(!Editcategries);
    setEditsubcategries(row.name);
    setEditprofile(row.image);
    setEditradiovalue(row.top_categories);
    console.log("EditcategriesEditcategries:::::", row);
  };
  ////edit product
  const editproduct = (row) => {
    const id = row.name;
    let url = ` https://secure-river-15887.herokuapp.com/editCategory/${id}`;

    console.log("data response categriesfield:::", url);
    const fd = new FormData();

    fd.append("name", subcategries);
    fd.append("top_categories", radiovalue);

    //********* HERE IS THE CHANGE ***********

    fd.append("myField", profile);
    axios
      .post()
      .then(
        (res) => {
          console.log("data response manage product:::", res);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  ///first
  const [subcategries, setsubcategries] = useState("");
  const [profile, setprofile] = useState(null);
  const [radiovalue, setradiovalue] = useState("Yes");

  ////baner post first
  const addsubcategries = () => {
    let url = "https://secure-river-15887.herokuapp.com/addCategory";
    setisloading(true);
    console.log("data response categriesfield:::", url);
    const fd = new FormData();

    fd.append("name", subcategries);
    fd.append("top_categories", radiovalue);

    //********* HERE IS THE CHANGE ***********

    fd.append("myField", profile);

    axios
      .post(url, fd)
      .then(
        (res) => {
          console.log("data categriesfield:::", res);

          setisupdated(!isupdated);
          setisloading(false);
          setsubcategries("");
          setprofile(null);
          setradiovalue("Yes");
          setopendialogbox(!opendialogbox);
        },

        (error) => {
          console.log("data response categriesfield:::", error);
          setisloading(false);
        }
      )
      .catch((e) => {
        console.log("data response categriesfield:::", e);
        setisloading(false);
      });
  };

  /// get api order
  const [getsubcategries, setgetsubcategries] = useState([]);

  useEffect(() => {
    try {
      let url = "https://secure-river-15887.herokuapp.com/viewCategory";
      setisloading(true);
      console.log("get viewcategries:::", url);
      axios.get(url).then(
        (res) => {
          setgetsubcategries(res.data);
          console.log("get viewcategries:::", res);
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

  const deletebanner = (row) => {
    let id = row._id;

    let url = `https://secure-river-15887.herokuapp.com/deleteCategory/${id}`;
    setisloading(true);
    axios
      .get(url)
      .then(
        (res) => {
          console.log("data deletebanner:::", res);
          setisupdated(!isupdated);
          setisloading(false);
        },

        (error) => {
          console.log("data response error:::", error);
          setisloading(false);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
        setisloading(false);
      });
  };

  //edit
  //edit banner api
  // const editfeatures = (Id) => {
  //   let EditId = Id;
  //   let url = `https://secure-river-15887.herokuapp.com/editBanner/${EditId}`;

  //   const fd = new FormData();

  //   //********* HERE IS THE CHANGE ***********

  //   fd.append("myField", image);

  //   axios
  //     .post(url, fd)
  //     .then(
  //       (res) => {
  //         console.log("data response edit data:::", res);
  //       },

  //       (error) => {
  //         console.log("data response error:::", error);
  //       }
  //     )
  //     .catch((e) => {
  //       console.log("data response error:::", e);
  //     });
  // };

  return (
    <>
      <div>
        <div className="content_padding">
          <h3 className="mb-3" onClick={() => setopendialogbox(!opendialogbox)}>
            <i class="fa fa-plus-square mr-2"></i>
            Add Sub Categories
          </h3>
          <Expand open={opendialogbox}>
            <Card className=" mb-2 Card_shadow p-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text_filed_heading">Sub Catagories</div>
                    <div className=" mt-1">
                      <input
                        type="text"
                        value={subcategries}
                        onChange={(e) => {
                          setsubcategries(e.target.value);
                        }}
                        className="form-control "
                        placeholder="Sub Catagories"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text_filed_heading mt-3">Select Image</div>
                    <div className=" mt-1">
                      <input
                        type="file"
                        onChange={(e) => setprofile(e.target.files[0])}
                        className="form-control "
                        placeholder=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="text_filed_heading mt-3">
                    Add Top Catagories
                  </div>
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
                  <TableCell>Sub Categories</TableCell>
                  <TableCell>Categories Type</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getsubcategries.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        class="d-block"
                        style={{ height: "40px", width: "50px" }}
                        src={`https://secure-river-15887.herokuapp.com/public/images/${row.image}`}
                        alt="First slide"
                      />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.top_categories}</TableCell>

                    {/* <TableCell
                      className="text-info status_manage"
                      // onClick={() => props.history.push("/SubCatagories")}
                    >
                      Add Sub Categories
                    </TableCell> */}
                    <TableCell>
                      <span className="">
                        <i
                          class="fa fa-trash mr-3"
                          onClick={() => deletebanner(row)}
                        ></i>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>
                        <i
                          class="fa fa-edit mr-1 pl-3"
                          onClick={() => editcategoriesmain(row)}
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
            open={Editcategries}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Categeries
              <span
                className="float-right icon_color"
                onClick={() => setEditcategries(!Editcategries)}
              >
                <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
              </span>
            </DialogTitle>
            <DialogContent>
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text_filed_heading">Sub Catagories</div>
                    <div className=" mt-1">
                      <input
                        type="text"
                        value={Editsubcategries}
                        onChange={(e) => {
                          setEditsubcategries(e.target.value);
                        }}
                        className="form-control "
                        placeholder="Sub Catagories"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text_filed_heading mt-3">Select Image</div>
                    <div className=" mt-1">
                      <input
                        type="file"
                        onChange={(e) => setEditprofile(e.target.files[0])}
                        className="form-control "
                        placeholder=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="text_filed_heading mt-3">
                    Add Top Catagories
                  </div>
                  <label className="radio_font mr-2">
                    <input
                      className="mr-2"
                      type="radio"
                      name="optradio"
                      checked={Editradiovalue === "yes"}
                      value="Yes"
                      onChange={(e) => Editradiovalue(e)}
                    />
                    Yes
                  </label>
                  <label className="radio_font">
                    <input
                      className="mr-2"
                      type="radio"
                      name="optradio"
                      checked={Editradiovalue === "No"}
                      value="No"
                      onChange={(e) => Editradiovalue(e)}
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
            </DialogContent>
            <DialogActions>
              <Button className="button_formatting">Cancel</Button>
              <Button className="button_formatting" onClick={() => editproduct}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <Loder loading={isloading} />
    </>
  );
}
export default HOC(Catagories);
