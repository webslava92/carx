import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStation from "@mui/icons-material/LocalGasStation";
import Settings from "@mui/icons-material/Settings";
import Build from "@mui/icons-material/Build";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import KeyboardDoubleArrowRight  from "@mui/icons-material/KeyboardDoubleArrowRight";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalGasStation />
      </ListItemIcon>
      <ListItemText primary="Fuel" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Auto parts" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Build />
      </ListItemIcon>
      <ListItemText primary="Repair work" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DirectionsCar />
      </ListItemIcon>
      <ListItemText primary="Autocosmetics" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <KeyboardDoubleArrowRight />
      </ListItemIcon>
      <ListItemText primary="Mileage" />
    </ListItemButton>
  </React.Fragment>
);
