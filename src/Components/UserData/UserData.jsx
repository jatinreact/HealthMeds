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

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Kaitlyn L. Harper ", "KaitlynLHarper@jourrapide.com", 4436881503),
  createData("Kaitlyn L. Harper ", "KaitlynLHarper@jourrapide.com", 4436881503),
  createData("Kaitlyn L. Harper ", "KaitlynLHarper@jourrapide.com", 4436881503),
];

function UserData() {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className="content_padding">
          <h3>User Data</h3>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Add</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>Block</TableCell>
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
export default HOC(UserData);
