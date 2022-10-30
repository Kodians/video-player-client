import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { VideoUploadForm } from "../videoUploadForm/VideoUploadForm";
import { makeStyles } from "@mui/styles";
import UserVideosInfos from "../userVideosInfos/userVideosInfos";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    bgcolor: "background.paper",
    // display: "flex",
    // justifyContent: "space-between",
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
      style={{ overflow: "auto" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
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
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        sx={{ borderRight: 1, borderColor: "divider", overflow: "visible" }}
      >
        <Button>
          <Link href={"/"}>
            <Tab label="Accueil" {...a11yProps(0)} />
          </Link>
        </Button>
        <Tab label="Ajouter +" {...a11yProps(1)} />
        <Tab label="Vidéos" {...a11yProps(2)} />
        <Tab label="Profile" {...a11yProps(3)} />
        <Button>
          <Link href={"/"}>
            <Tab label="Déconnexion" {...a11yProps(4)} />
          </Link>
        </Button>
      </Tabs>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1}>
          <VideoUploadForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UserVideosInfos />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4} />
      </div>
    </Box>
  );
};
