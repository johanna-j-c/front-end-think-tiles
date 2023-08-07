import React from "react";
import { useForm } from "react-hook-form";
import './Login.css';

function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const userData = JSON.parse(localStorage.getItem(data.email));
        const teacherData = props.fetchTeachers(data.email)
		if (teacherData) { // getItem can return actual value or null
			if (teacherData.email === data.email) {
				console.log(userData.name + " You Are Successfully Logged In");
			} else {
				console.log("Email or Password is not matching with our record");
			}
		} else {
			console.log("Email or Password is not matching with our record");
		}
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
