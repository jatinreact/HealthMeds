import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import HOC from "../../Common/Hoc";
import "./Addmore.css";
import axios from "axios";
import Button from "@restart/ui/esm/Button";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const Addmore = (props) => {
  //dialogbox
  const [EditDailogOpen, setEditDailogOpen] = useState(false);

  const [addfeatues, setaddfeatues] = useState([]);
  console.log("propsdata", props);

  const id = props.location.state.id;

  //add features
  const [features, setfeatures] = useState("");
  const [isupdated, setisupdated] = useState(false);
  const [EditFeature, setEditFeature] = useState("");
  const [EditId, setEditId] = useState("");

  const HandleEditData = (data) => {
    setEditId(data._id);
    setEditFeature(data.feature);
    setEditDailogOpen(!EditDailogOpen);
  };

  //add delete features

  const deleteproduct = (row) => {
    let deleteid = row._id;

    let url = `https://secure-river-15887.herokuapp.com/deleteFeature/${deleteid}`;
    axios
      .get(url)
      .then(
        (res) => {
          console.log("data response:::", res);
          setisupdated(!isupdated);
          setEditFeature("");
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  ///edit features

  const editfeatures = (Id) => {
    let EditId = Id;
    let url = `https://secure-river-15887.herokuapp.com/editFeature/${EditId}`;

    let temp = {
      feature: EditFeature,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          setisupdated(!isupdated);
          setEditFeature("");
          setEditDailogOpen(!EditDailogOpen);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };
  //addfeatures

  const addfeatures = () => {
    let url = `https://secure-river-15887.herokuapp.com/addFeature/${id}`;
    console.log("data respons:::", url);
    let temp = {
      feature: features,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response jfeiwejfiwjm:::", res);
          setisupdated(!isupdated);
          setfeatures("");
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  useEffect(() => {
    try {
      let url = `https://secure-river-15887.herokuapp.com/getFeature/${id}`;
      axios.get(url).then(
        (res) => {
          setaddfeatues(res.data.response);

          console.log("res data home::::", res);
        },
        (error) => {}
      );
    } catch (error) {}
  }, [isupdated]);

  return (
    <>
      <div className="content_padding">
        <Card className="Card_shadow p-3">
          <div className="text_filed_heading">Add Features</div>
          <div className=" mt-1 p-2">
            <input
              value={features}
              onChange={(e) => {
                setfeatures(e.target.value);
              }}
              type="text"
              className="form-control "
              placeholder="Add Features"
              autoComplete="off"
            />
          </div>

          <Button
            outlined="none"
            className="button_formatting"
            onClick={addfeatures}
          >
            Create
          </Button>
        </Card>
      </div>

      <div className="container mt-5">
        <div className="table_class">
          <table>
            <tr>
              <th>Faeatures </th>

              <th>Delete </th>
              <th>Edit </th>
            </tr>
            {addfeatues.map((row, index) => (
              <tr>
                <td>{row.feature}</td>
                <td onClick={() => deleteproduct(row)}>Delete</td>

                <span>
                  <i
                    class="fa fa-edit mr-1"
                    onClick={() => HandleEditData(row)}
                  ></i>
                </span>
              </tr>
            ))}
          </table>
        </div>
        <div className="">
          <Dialog
            open={EditDailogOpen}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth="fullWidth"
          >
            <DialogTitle>
              Add Key Features
              <span
                className="float-right icon_color"
                onClick={() => setEditDailogOpen(!EditDailogOpen)}
              >
                <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
              </span>
            </DialogTitle>
            <DialogContent>
              <div className="text_filed_heading">Add Features</div>
              <div className=" mt-1">
                <input
                  type="text"
                  className="form-control "
                  placeholder="feature"
                  autoComplete="off"
                  value={EditFeature}
                  onChange={(e) => {
                    setEditFeature(e.target.value);
                  }}
                />
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
                onClick={() => editfeatures(EditId)}
              >
                Save{" "}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default HOC(Addmore);
