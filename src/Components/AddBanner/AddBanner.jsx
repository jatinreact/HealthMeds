import React, { useState, useEffect } from "react";
import HOC from "../../Common/Hoc";
import axios from "axios";

import Button from "@restart/ui/esm/Button";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const AddBanner = () => {
  const [banner, setbanner] = useState(null);
  const [gallary, setgallary] = useState([]);
  const [isupdated, setisupdated] = useState(false);

  ///edit banner

  const [EditDailogOpen, setEditDailogOpen] = useState("");

  const [image, setimage] = useState("");
  const [imageId, setimageId] = useState("");

  const Handlebanner = (item) => {
    console.log("editbanner:::::", item);
    setimage(item.bannerImage);
    setimageId(item._id);
    setEditDailogOpen(!EditDailogOpen);
  };

  //edit banner api
  const editfeatures = (Id) => {
    let EditId = Id;
    let url = `https://secure-river-15887.herokuapp.com/editBanner/${EditId}`;

    const fd = new FormData();

    //********* HERE IS THE CHANGE ***********

    fd.append("myField", image);

    axios
      .post(url, fd)
      .then(
        (res) => {
          console.log("data response edit data:::", res);
          setisupdated(!isupdated);

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

  const editbanner = (Id) => {
    let EditId = Id;
    let url = `https://secure-river-15887.herokuapp.com/editBanner/${EditId}`;

    let temp = {};
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data editbanner:::", res);
          setisupdated(!isupdated);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  /// delete banner

  const deletebanner = (item) => {
    let id = item._id;

    let url = `https://secure-river-15887.herokuapp.com/deleteBanner/${id}`;
    axios
      .get(url)
      .then(
        (res) => {
          console.log("data deletebanner:::", res);
          setisupdated(!isupdated);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  ///get banner

  useEffect(() => {
    try {
      let url = "https://secure-river-15887.herokuapp.com/getBanner";
      axios.get(url).then(
        (res) => {
          setgallary(res.data.data);
          console.log("get banner:::", res);
        },
        (error) => {}
      );
    } catch (error) {}
  }, [isupdated]);

  ////baner post first
  const addbanner = () => {
    let url = "https://secure-river-15887.herokuapp.com/addBanner";
    console.log("data response bannere:::", url);
    const fd = new FormData();

    //********* HERE IS THE CHANGE ***********
    for (let i = 0; i < banner.length; i++) {
      fd.append("myField", banner[i]);
    }

    axios
      .post(url, fd)
      .then(
        (res) => {
          console.log("data response banner:::", res);
          alert("banner Successfully added");
          setisupdated(!isupdated);
        },

        (error) => {
          console.log("data response error:::", error);
        }
      )
      .catch((e) => {
        console.log("data response error:::", e);
      });
  };

  return (
    <>
      <div className="content_padding">
        <div class="mb-3"></div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Add Banner
          </label>
          <input
            onChange={(e) => setbanner(e.target.files)}
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button
          type="button"
          class="btn btn-success mb-3 pl-3 pr-3"
          onClick={addbanner}
        >
          Add
        </button>

        <div class="card ">
          {gallary
            ? gallary.map((item, index) => (
                <div class="">
                  <img
                    class="d-block w-100 h-400"
                    src={`https://secure-river-15887.herokuapp.com/public/images/${item.bannerImage}`}
                    alt="First slide"
                  />
                  <div align="left">
                    <span>
                      <i
                        class="fa fa-edit mr-1 pl-3"
                        onClick={() => Handlebanner(item)}
                      ></i>
                    </span>
                    <span>
                      <i
                        class="fa fa-trash"
                        onClick={() => deletebanner(item)}
                      ></i>
                    </span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="">
        <Dialog
          open={EditDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle>
            Add Banner
            <span
              className="float-right icon_color"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"></label>
              <input
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button className="button_formatting">Cancel</Button>
            <Button
              className="button_formatting"
              onClick={() => editfeatures(imageId)}
            >
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default HOC(AddBanner);
