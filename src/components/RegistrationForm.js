import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import './RegistrationForm.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

// const RegistrationForm = (props) => {
//     const teacherDefaultState = {
//         name: "",
//         email: "",
// 		password: ""
//     };
    
//     const [teacherFormData, setTeacherFormData] = useState(teacherDefaultState);
//     const [isHidden, setIsHidden] = useState(false);
    
//     const handleChange = (event) => {
//     const fieldName = event.target.name;
// 	const fieldValue = event.target.value;
    
//     const newFormData = {...teacherFormData, [fieldName]: fieldValue};
//     setTeacherFormData(newFormData);
//     };

//     const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTeacher = {
//         name: teacherFormData.name, 
//         email: teacherFormData.email,
// 		password: teacherFormData.password
//     }
//     props.onHandleTeacherSubmit(newTeacher);
//     setTeacherFormData(teacherDefaultState);
//     };

//     const toggleHiddenForm = () => {
//         setIsHidden(!isHidden);
//     };

//     const hiddenClass = isHidden ? 'hidden-component' : null;
//     const hiddenFormText = isHidden ? 'Show Teacher Registration Form' : 'Hide Teacher Registration Form';

//     return (
//     <section>
//         <div className={hiddenClass}>
//             <p className='title'>New Teacher Registration</p>
//             <form className='Registration' onSubmit={handleSubmit} >
//                 <div>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text" id="name" name="name" onChange={handleChange} value={teacherFormData.name}></input>
//                 </div>
//                 <div>
//                 <label htmlFor="email"> Email: </label>
//                 <input type="text" id="email" name="email" onChange={handleChange} value={teacherFormData.email}></input>
//                 </div>
//                 <div>
//                 <label htmlFor="password"> Password: </label>
//                 <input type="password" id="password" name="password" onChange={handleChange} value={teacherFormData.password}></input>
//                 </div>
//                 <div>
//                 <input type="submit" value="Sign up" style={{ backgroundColor: "#a1eafb" }}></input>
//                 </div>
//             </form>
//         </div>
//         <button onClick={toggleHiddenForm}>{hiddenFormText}</button>
//     </section>
//     );
// };

const RegistrationForm = (props) => {
    const teacherDefaultState = {
        name: "",
        email: "",
		password: ""
    };
    
    const [teacherFormData, setTeacherFormData] = useState(teacherDefaultState);
    const [isHidden, setIsHidden] = useState(true);
    
    const handleChange = (event) => {
    const fieldName = event.target.name;
	const fieldValue = event.target.value;
    
    const newFormData = {...teacherFormData, [fieldName]: fieldValue};
    setTeacherFormData(newFormData);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const newTeacher = {
        name: teacherFormData.name, 
        email: teacherFormData.email,
		password: teacherFormData.password
    }
    props.onHandleTeacherSubmit(newTeacher);
    setTeacherFormData(teacherDefaultState);
    };

    const toggleHiddenForm = () => {
        setIsHidden(!isHidden);
    };

    const hiddenClass = isHidden ? 'hidden-component' : null;
    const hiddenFormText = isHidden ? 'New to Think Tiles? Sign up' : 'Already have an account? Sign in';

    return (
    <ThemeProvider theme={defaultTheme}>
        <div className={hiddenClass}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <PersonRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    onChange={handleChange} value={teacherFormData.name}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange} value={teacherFormData.email}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange} value={teacherFormData.password}
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            </Box>
        </Box>
        </Container>
        </div>
        <Grid container justifyContent="flex-end">
                <Grid item>
                <Button variant="text" onClick={toggleHiddenForm}>
                    {hiddenFormText}
                </Button>
                </Grid>
            </Grid>
    </ThemeProvider>
    );
}

// Need to update these propTypes
// BoardList.propTypes = {
//     boardData: PropTypes.arrayOf(
//         PropTypes.shape({
//             boardId: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             owner: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// }

export default RegistrationForm;