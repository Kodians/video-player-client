import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { VideoUploadForm } from "../videoUploadForm/VideoUploadForm";
import { makeStyles } from "@mui/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  tabs: {
    overflow: "visible",
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const UserAccountSideBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Ajouter +" {...a11yProps(0)} />
        <Tab label="Vidéos" {...a11yProps(1)} />
        <Tab label="Profile" {...a11yProps(2)} />
      </Tabs>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <TabPanel value={value} index={0}>
          <VideoUploadForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </Box>
  );
};