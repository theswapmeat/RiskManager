import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

function MainGrid(props) {

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {props.assets.map((asset) => {
        const { assetName, city, country, id } = asset;
        return (
          <Grid item key={id}>
            <Card
              sx={{
                minWidth: 345,
                maxWidth: 345,
                bgcolor: "background.paper",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <BatteryChargingFullIcon />
                  </Avatar>
                }
                titleTypographyProps={{ variant: "h6", lineHeight: 1 }}
                title={assetName}
                subheader={`${city}, ${country}`}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/200"
                alt={assetName}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MainGrid;
