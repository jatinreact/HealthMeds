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

function SubCatagories(props) {
  const classes = useStyles();

  const [EditDailogOpen, setEditDailogOpen] = useState(false);
  const [isupdated, setisupdated] = useState(false);
  const [opendialogbox, setopendialogbox] = useState(false);

  const dialogbox = () => {
    setopendialogbox(!opendialogbox);
  };

  //update api ordered

  const [orderId, setorderId] = useState("");
  const [type, settype] = useState("");

  const HandleEditData = (row) => {
    setorderId(row._id);
    settype(row.orderStatus);
    setEditDailogOpen(!EditDailogOpen);
  };

  const orderdetail = [
    {
      id: 1,
      categories: "car",
      subcategories: "car1",
    },
    {
      id: 2,
      categories: "car",
      subcategories: "car1",
    },
  ];

  //   const managestatus = (orderId) => {
  //     let order = orderId;
  //     let url = "https://secure-river-15887.herokuapp.com/updateOrderAdmin";

  //     let temp = {
  //       orderId: order,
  //       type,
  //     };
  //     axios
  //       .post(url, temp)
  //       .then(
  //         (res) => {
  //           console.log("data response manage product:::", res);
  //           setisupdated(!isupdated);
  //           setEditDailogOpen(false);
  //         },

  //         (error) => {
  //           console.log("data response error:::", error);
  //         }
  //       )
  //       .catch((e) => {
  //         console.log("data response error:::", e);
  //       });
  //   };

  //   /// get api order
  //   const [orderdetail, setorderdetail] = useState([]);

  //   useEffect(() => {
  //     try {
  //       let url =
  //         "https://secure-river-15887.herokuapp.com/getCustomerOrdersAdmin";
  //       axios.get(url).then(
  //         (res) => {
  //           setorderdetail(res.data.orders);
  //           console.log("data:::", res);
  //         },
  //         (error) => {}
  //       );
  //     } catch (error) {}
  //   }, [isupdated]);

  return (
    <>
      <div>
        <div className="content_padding">
          <h3 className="mb-3" onClick={dialogbox}>
            <i class="fa fa-plus-square mr-2"></i>Add Sub Categories
          </h3>

          <Expand open={opendialogbox}>
            <Card className=" mb-2 Card_shadow p-3 mb-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text_filed_heading">Add Sub Categories</div>
                    <div className=" mt-1">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Sub Catagories"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="mt-2 pb-3 ">
                    <Button variant="contained" className="button_formatting">
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
                  <TableCell>Sub Categories</TableCell>

                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderdetail.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.subcategories}</TableCell>

                    <TableCell>
                      <span className="">
                        <i class="fa fa-trash mr-3"></i>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
        </div>
      </div>
    </>
  );
}
export default HOC(SubCatagories);
