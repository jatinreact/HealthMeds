import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HOC from "../../Common/Hoc";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    id: 565959594546544,
    type: "Paytm",
    amount: 9999,
  },
  {
    id: 565959594546544,
    type: "Paypal",
    amount: 279852,
  },
  {
    id: 565959594546544,
    type: "Paypal",
    amount: 279852,
  },
];

function PaymentDetails() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <h3>Payment Details</h3>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>User Id</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.amount}</TableCell>
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
export default HOC(PaymentDetails);
