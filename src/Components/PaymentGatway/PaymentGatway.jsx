import React from "react";
import HOC from "../../Common/Hoc";
import { Button, Grid, Card } from "@material-ui/core";

const PaymentGatway = () => {
  return (
    <div>
      <div className="content_padding">
        <Grid className="Component_main_grid p-2 "></Grid>
        <h5 className="ml-2 mb-3 ">Add PaymetGatway Details</h5>
        <div>
          <Card className=" mb-2 Card_shadow p-3">
            <div className="card_admissiondetails_height">
              <div className="textfiled_margin">
                <div className="card_content_instition">
                  <div className="text_filed_heading">Add Key</div>
                  <div className=" mt-1">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Key"
                      autoComplete="off"
                    />
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={12}>
                      <div className="text_filed_heading">Add Value</div>
                      <div className=" mt-1 mr-2">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Value"
                          autoComplete="off"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-3 ">
                  <Button variant="contained" className="button_formatting">
                    Submit
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

export default HOC(PaymentGatway);
