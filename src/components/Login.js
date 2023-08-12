import React from "react";
import { useForm } from "react-hook-form";
// import './Login.css';

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

	return (
		<>
			<p className="title">Login Form</p>

			<form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <label>Email:</label>
				<input type="email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
                <label>Password:</label>
				<input type="password" {...register("password")} />
				<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</>
	);
}
export default Login;
