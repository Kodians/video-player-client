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
import useMediaQuery from '@mui/material/useMediaQuery';
import { width } from '@mui/system';
import { Store } from '../../utils/store';

function UserProfile() {
    const [isExtraSmallScreenSize, setIsExtraSmallScreenSize] = React.useState(false)

    const extraSmallScreen = useMediaQuery('(max-width:1000px)');
    const largeWidth = useMediaQuery('(min-width:1000px)');
    const largminWidth = useMediaQuery('(max-width:999px)')

    const { state }: any = React.useContext(Store);
    const { userInfo } = state;

    const [userData, setUserData] = React.useState({
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
        email: userInfo?.email,
        password: ""
    })

    const handleInputChange = (event: any) => {
        setUserData((prevData: any) => {
            return {
                ...prevData, [event.target.name]: event.target.value
            }
        })
    }

    const editUserInfo = () => {
        console.log(userData)
    }

    React.useEffect(() => {
        setIsExtraSmallScreenSize(prevIsExtraSmallScreenSize => !prevIsExtraSmallScreenSize)
    }, [extraSmallScreen])
    return (
        <div role="user-profile">
            <Grid container alignItems='center' direction={extraSmallScreen ? "column-reverse" : "row"} spacing={2} >
                <Grid  item style={extraSmallScreen ? { width: "100%" } : {}} width={largminWidth ? "width: 720" : "width: 520"}>
                    <Card role="photo"
                        elevation={0} style={{ backgroundColor: '#F4F4F2', width: extraSmallScreen ? "100%" : 500 }}
                        sx={{ width: '700px', height: '321px' }}
                    >
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
                </Grid>

                <Grid item>
                    <Card role="recapProfile" sx={{ width: '300px', height: '250px' }} elevation={0} style={{ margin: '15px 0', backgroundColor: '#F4F4F2', height: 'fit-content', width: largminWidth ? 720 : '' }}>
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
                                Nom : {userInfo?.lastName}
                                <br />
                                Prenom : {userInfo?.firstName}
                                <br />
                                Email: {userInfo?.email}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container width={largminWidth ? "width: 720" : "width: 720"}>
                <Grid item style={largeWidth ? { width: 820 } : { width: 720 }}>
                    <Card role="informationProfile" elevation={0} style={{ margin: '15px 0', backgroundColor: '#F4F4F2' }}>
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
                                        role="fristname"
                                        label="First Name"
                                        name="firstName"
                                        value={userData.firstName}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />

                                    <TextField
                                        id="outlined-password-input"
                                        label="Last Name"
                                        role="lastname"
                                        name='lastName'
                                        value={userData.lastName}
                                        onChange={handleInputChange}
                                        autoComplete="current-password"
                                        fullWidth
                                    />
                                </Box>
                                <Box>

                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Password"
                                        type="password"
                                        name='password'
                                        value={userData.password}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />

                                    <TextField
                                        id="outlined-number"
                                        label="Adresse email"
                                        /* role="adressmail" */
                                        type="email"
                                        name="name"
                                        value={userData.email}
                                        onChange={handleInputChange}
                                        /* defaultValue="email@gmail.com" */
                                        fullWidth
                                    />
                                </Box>
                            </div>
                        </Box>
                        <div style={{ float: "right", padding: "10px" }}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={editUserInfo}
                            >
                                Save
                            </Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default UserProfile