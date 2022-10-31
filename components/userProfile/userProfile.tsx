import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Card, Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';


function userProfile() {
    return (
        <Container sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Card>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h6" component="div">
                                Photo
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" />
                <div style={{ display: 'flex' }}>
                    <Box sx={{ m: 2 }}>
                        <Stack direction="row" spacing={5}>
                            <Avatar alt="Photo" src="" sx={{ width: 60, height: 60 }} />
                        </Stack>
                    </Box>
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Typography>
                            Choose an image in your computer
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" component="label">
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </Stack>
                    </Box>
                </div>
            </Card>
            <Card style={{ margin: '15px' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h6" component="div">
                                Information
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" />

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Box>
                            <TextField
                                id="outlined-required"
                                label="Username"
                                defaultValue="Username"
                                fullWidth
                            />
                            <TextField
                                id="outlined-disabled"
                                label="Fistname"
                                defaultValue="Frist name"
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <TextField
                                id="outlined-password-input"
                                label="Lastname"
                                defaultValue="Last name"
                                autoComplete="current-password"
                                fullWidth
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Password"
                                type="password"
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ width: 500, maxWidth: '100%' }}>
                            <TextField
                                id="outlined-number"
                                label="Adresse email"
                                type="email"
                                defaultValue="email@gmail.com"
                                fullWidth
                            />
                        </Box>
                    </div>
                </Box>
            </Card>
            <div style={{ float: "right" }}>
                <Button
                    variant="contained"
                    color="success"
                >
                    Save
                </Button>
            </div>
        </Container>


    )
}

export default userProfile