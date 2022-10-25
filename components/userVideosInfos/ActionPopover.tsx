import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, List, ListItem } from "@mui/material";

export function ActionPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography component="div" sx={{ p: 2 }}>
          <List>
            <ListItem>
              <IconButton size="small" sx={{ "& > *": { p: 1 } }}>
                <EditIcon />
                <Typography>Edit</Typography>
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton size="small" sx={{ "& > *": { p: 1 } }}>
                <DeleteIcon />
                <Typography>Delete</Typography>
              </IconButton>
            </ListItem>
          </List>
        </Typography>
      </Popover>
    </div>
  );
}
