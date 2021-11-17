import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { red } from "@mui/material/colors";
import NotificationDialog from "./NotificationDialog";
import axios from "axios";

function CardTemplate({ data, handleDelete, type }) {
  const { assetName, city, policies, claims, premium } = data;
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });

  const onDelete = (id) => {
    console.log("clock");

    axios
      .put(`${process.env.REACT_APP_BASEURL}invalidateasset/${id}`)
      .then((res) => {
        console.log(res);
        //Snackbar
      });

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
  };

  return (
    <div>
      <Card
        sx={{
          minWidth: 345,
          maxWidth: 345,
          bgcolor: "background.paper",
        }}
        elevation={3}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label={assetName}>
              <BatteryChargingFullIcon />
            </Avatar>
          }
          titleTypographyProps={{
            variant: "h6",
            lineHeight: 1,
          }}
          title={assetName}
          subheaderTypographyProps={{ color: "grey" }}
          subheader={`${city.cityName}, ${city.country.countryName}`}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/200"
          alt={assetName}
        />

        <CardContent>
          {type === "asset" ? (
            <div>
              <Typography variant="body1" color="text.primary">
                Number of policies: {policies}
              </Typography>
              <Typography variant="body1" color="text.primary">
                Number of open claims: {claims}
              </Typography>
              <Typography variant="body1" color="text.primary">
                Total premium for:{" "}
                {premium ? Number(premium).toLocaleString() : ""}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions>
          <IconButton
            sx={{ marginLeft: "auto" }}
            // onClick={() => handleDelete(data.id)}
            onClick={() => {
              setConfirmDialog({
                isOpen: true,
                title: 'Are you sure to delete this',
                subtitle: "You can't undo this operation",
                onConfirm: () => {
                  onDelete(data.id);
                }, 
              });
            }}
          >
            <DeleteOutline />
          </IconButton>
          <IconButton
            sx={{ marginLeft: "auto" }}
            onClick={() => console.log("open", data.id)}
          >
            <ModeEditIcon />
          </IconButton>
        </CardActions>
      </Card>
      <NotificationDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
}

export default CardTemplate;
