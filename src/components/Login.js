import React from "react";
import { useForm } from "react-hook-form";
// import './Login.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginBackground from "../img/LoginBackground.jpg"

const defaultTheme = createTheme();

function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		const teacherData = await props.fetchLoginTeachers(data.email)
		console.log(teacherData);
		if (teacherData) {
			if (teacherData.email === data.email) {
				console.log(data.name + " You Are Successfully Logged In");
			} else {
				console.log("Email or Password is not matching with our record");
			}
		} else {
			console.log("Email or Password is not matching with our record");
		}
		localStorage.setItem("teacher", JSON.stringify({ 
			id: teacherData.id, name: teacherData.name, email: teacherData.email 
		}));
		console.log(teacherData);
		props.handleLoginUser(teacherData)
	};

	// return (
	// 	<>
	// 		<p className="title">Login Form</p>

	// 		<form className="Login" onSubmit={handleSubmit(onSubmit)}>
    //             <label>Email:</label>
	// 			<input type="email" {...register("email", { required: true })} />
	// 			{errors.email && <span style={{ color: "red" }}>
	// 				*Email* is mandatory </span>}
    //             <label>Password:</label>
	// 			<input type="password" {...register("password")} />
	// 			<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
	// 		</form>
	// 	</>
	// );
	return (
		<ThemeProvider theme={defaultTheme}>
		<Grid container component="main" sx={{ height: '100vh' }}>
			<CssBaseline />
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
				backgroundImage: 'url(https://images.pexels.com/photos/5412101/pexels-photo-5412101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
				backgroundRepeat: 'no-repeat',
				backgroundColor: (t) =>
				t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
				backgroundSize: 'cover',
				backgroundPosition: 'bottom',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<Box
				sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						{...register("email", { required: true })}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password")}
					/>
					<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					>
					Sign In
					</Button>
				{/* <Grid container>
					<Grid item xs>
						<Link href="#" variant="body2">
						Forgot password?
						</Link>
					</Grid>
				</Grid> */}
				</Box>
			</Box>
			</Grid>
			</Grid>
		</ThemeProvider>
	);

}
export default Login;
