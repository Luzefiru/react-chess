import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LoadFenDialog from "./Dialog/LoadFenDialog";
import FenDialog from "./Dialog/FenDialog";
import TakebackOfferDialog from "./Dialog/TakebackOfferDialog";
import TakebackAcceptDialog from "./Dialog/TakebackAcceptDialog";
import CreateInviteCodeDialog from "./Dialog/CreateInviteCodeDialog";
import EnterInviteCodeDialog from "./Dialog/EnterInviteCodeDialog";
import HeuristicPictureDialog from "./Dialog/HeuristicPictureDialog";
import DrawAcceptDialog from "./Dialog/DrawAcceptDialog";
import DrawOfferDialog from "./Dialog/DrawOfferDialog";
import ResignAcceptDialog from "./Dialog/ResignAcceptDialog";
import PgnDialog from "./Dialog/PgnDialog";
import LoadPgnDialog from "./Dialog/LoadPgnDialog";
import RematchAcceptDialog from "./Dialog/RematchAcceptDialog";
import RematchOfferDialog from "./Dialog/RematchOfferDialog";
import Board from "./Board.js";
import Buttons from "./Buttons.js";
import History from "./History";
import MainBreadcrumbs from "./MainBreadcrumbs";
import MoveValidator from "./MoveValidator.js";
import { default as ButtonsPlayFriendMode } from "./PlayFriendMode/Buttons.js";
import GameClock from "./GameClock/GameClock";
import InfoAlert from "./InfoAlert.js";
import "../index.css";
import store from "../store";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Chess = ({ props }) => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid item xs={12} md={3} className={classes.container}>
          <Buttons props={props} />
          <Paper className={classes.paper}>
            <MainBreadcrumbs />
            <History />
            <GameClock />
            <Grid container className={classes.container}>
              <MoveValidator />
            </Grid>
            <ButtonsPlayFriendMode />
          </Paper>
          <InfoAlert />
        </Grid>
        <Grid item xs={12} md={6}>
          <Board props={props} />
        </Grid>
      </Grid>
      <TakebackAcceptDialog />
      <TakebackOfferDialog />
      <LoadFenDialog />
      <CreateInviteCodeDialog />
      <EnterInviteCodeDialog />
      <HeuristicPictureDialog />
      <FenDialog />
      <DrawAcceptDialog />
      <DrawOfferDialog />
      <ResignAcceptDialog />
      <PgnDialog />
      <LoadPgnDialog />
      <RematchAcceptDialog />
      <RematchOfferDialog />
    </Provider>
  );
};

export default Chess;
