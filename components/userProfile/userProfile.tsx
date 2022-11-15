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
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MediaQuery from 'react-responsive';


function userProfile() {

    return (
        <Container sx={{ width: '100%', bgcolor: 'background.paper', display: "flex", elevation: 0 }}>
            <Container>
                <Card elevation={0} style={{ backgroundColor: '#F4F4F2' }}>
                    <Box sx={{ my: 1, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h6" component="div">
                                    Photo
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <Box sx={{ m: 2 }}>
                            <Stack direction="row" spacing={5}>
                                <Avatar alt="Photo" src="" sx={{ width: 80, height: 80 }} />
                            </Stack>
                        </Box>
                        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Typography variant="h6" component="div">
                                Choose an image in your computer
                            </Typography>
                            <Stack direction="row" spacing={2} margin='10px'>
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
                <Card elevation={0} style={{ margin: '15px 0', backgroundColor: '#F4F4F2' }}>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h6" component="div">
                                    Information
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />

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
                    <div style={{ float: "right", padding: "10px" }}>
                        <Button
                            variant="contained"
                            color="success"
                        >
                            Save
                        </Button>
                    </div>
                </Card>
            </Container>
            <MediaQuery minWidth={928} orientation={'landscape'}>
                <Container style={{ display: "flex" }}>
                    <Card sx={{ width: '300px', height: '250px' }} elevation={0} style={{ margin: '15px 0', backgroundColor: '#F4F4F2', height: 'fit-content' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img-4.linternaute.com/SZUPUJxUH6c3YlxZEN9YTlQmxqM=/1500x/smart/04a476b128c74d28a9b3ea8d30864092/ccmcms-linternaute/34766541.jpg"
                            alt="green iguana"
                        />
                        <CardContent style={{ padding: '2px' }}>
                            <div style={{ marginTop: '-25px' }}>
                                <Avatar alt="Photo" src="" sx={{ width: 90, height: 90, marginLeft: 'auto', marginRight: 'auto' }} />
                            </div>
                            <Typography gutterBottom variant="h6" component="div" style={{ marginTop: '10px' }}>
                                Nom :
                                <br />
                                Prenom :
                                <br />
                                Email:
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </MediaQuery>
        </Container>
    )
}

export default userProfile