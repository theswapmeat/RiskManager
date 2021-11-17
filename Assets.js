import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CardTemplate from "../layout/CardTemplate";

function Assets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}assets`)
      .then((res) => {
        setAssets(res.data);
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const handleDelete = async (id) => {
  //   axios
  //     .put(`${process.env.REACT_APP_BASEURL}invalidateasset/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //     });

  //   const newAssets = assets.filter((asset) => asset.id !== id);
  //   setAssets(newAssets);
  // };

  return (
    <React.Fragment>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {assets.map((asset) => (
          <Grid item key={asset.id}>
            <CardTemplate
              data={asset}
              type="asset"
              // handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid> 
    </React.Fragment>
  );
}
