import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, List, ListItem } from "@mui/material";
import { useDelete } from "../../hooks/useDelete";
import tokenService from "../../services/token.service";

export function ActionPopover({ videoId }: any) {
  const [userId, setUserId] = React.useState<string>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { mutate: deleteVideo } = useDelete(`/user/${userId}/videos`);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const removeVideo = () => {
    deleteVideo(videoId);
  };

  React.useEffect(() => {
    const user = tokenService.getUser();
    if (user && user.userId) {
      setUserId(user.userId);
    }
  }, [videoId]);

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
              <IconButton
                size="small"
                sx={{ "& > *": { p: 1 } }}
                onClick={removeVideo}
              >
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
