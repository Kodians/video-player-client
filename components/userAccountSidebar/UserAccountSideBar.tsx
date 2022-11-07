import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { VideoUploadForm } from "../videoUploadForm/VideoUploadForm";
import { makeStyles } from "@mui/styles";
import UserVideosInfos from "../userVideosInfos/userVideosInfos";
import UserProfile from "../userProfile/userProfile";
import Link from "next/link";
import { IconButton } from "@mui/material";

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
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonIcon: {
    fontSize: 23,
    marginRight: 10,
  },
  buttonTypography: {
    fontSize: 17,
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
      <Link href={"/"}>
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
          }}
        >
          <HomeIcon className={classes.buttonIcon} />
          <Typography variant="h6" className={classes.buttonTypography}>
            Accueil
          </Typography>
        </IconButton>
      </Link>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          overflow: "visible",
          mt: 8,
        }}
      >
        <Tab
          className={classes.tab}
          icon={<AddIcon className={classes.buttonIcon} />}
          label="Ajouter"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.tab}
          icon={<VideoLibraryIcon className={classes.buttonIcon} />}
          label="Vidéos"
          {...a11yProps(1)}
        />
        <Tab
          className={classes.tab}
          icon={<AccountCircleIcon className={classes.buttonIcon} />}
          label="Profile"
          {...a11yProps(2)}
        />
      </Tabs>
      <Link href={"/"}>
        <IconButton
          sx={{
            position: "absolute",
            top: 285,
            left: 10,
          }}
        >
          <LogoutIcon className={classes.buttonIcon} />
          <Typography variant="h6" className={classes.buttonTypography}>
            Logout
          </Typography>
        </IconButton>
      </Link>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <TabPanel value={value} index={0}>
          <VideoUploadForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserVideosInfos />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UserProfile />
        </TabPanel>
      </div>
    </Box>
  );
};
