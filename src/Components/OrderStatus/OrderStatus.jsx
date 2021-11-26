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

function OrderStatus() {
  const classes = useStyles();

  const [EditDailogOpen, setEditDailogOpen] = useState(false);
  const [isupdated, setisupdated] = useState(false);

  //update api ordered

  const [orderId, setorderId] = useState("");
  const [type, settype] = useState("");

  const HandleEditData = (row) => {
    setorderId(row._id);
    settype(row.orderStatus);
    setEditDailogOpen(!EditDailogOpen);
  };

  const managestatus = (orderId) => {
    let order = orderId;
    let url = "https://secure-river-15887.herokuapp.com/updateOrderAdmin";

    let temp = {
      orderId: order,
      type,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response manage product:::", res);
          setisupdated(!isupdated);
          setEditDailogOpen(false);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  /// get api order
  const [orderdetail, setorderdetail] = useState([]);

  useEffect(() => {
    try {
      let url =
        "https://secure-river-15887.herokuapp.com/getCustomerOrdersAdmin";
      axios.get(url).then(
        (res) => {
          setorderdetail(res.data.orders);
          console.log("data:::", res);
        },
        (error) => {}
      );
    } catch (error) {}
  }, [isupdated]);

  return (
    <>
      <div>
        <div className="content_padding">
          <h3>Order Details</h3>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>

                  <TableCell>Payment Type</TableCell>
                  <TableCell>Order Status</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell>Payment Status</TableCell>
                  <TableCell>Order Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderdetail.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.items.map((data) => (
                        <div>{data.productId?.title}</div>
                      ))}
                    </TableCell>

                    <TableCell>{row.paymentType}</TableCell>

                    <TableCell>{row.orderStatus}</TableCell>
                    <TableCell>{row.totalAmount}</TableCell>
                    <TableCell>{row.paymentStatus}</TableCell>

                    <TableCell
                      onClick={() => HandleEditData(row)}
                      className="text-info status_manage"
                    >
                      Manage Status
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
        </div>
        <Dialog
          open={EditDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle>
            Manage Product Status
            <span
              className="float-right icon_color"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <div className=" mt-1 mr-2">
              <div class="form-group">
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  value={type}
                  onChange={(e) => {
                    settype(e.target.value);
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="ordered">Ordered </option>
                  <option value="packed">Packed</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              className="button_formatting"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              Cancel
            </Button>
            <Button
              className="button_formatting"
              onClick={() => managestatus(orderId)}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default HOC(OrderStatus);
