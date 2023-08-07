import React from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import './RegistrationForm.css';


const RegistrationForm = (props) => {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<>
			<p className="title">Registration Form</p>

			<form className="Registration" onSubmit={handleSubmit(onSubmit)}>
				<input type="name" {...register("name")} />
				<input type="email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
				<input type="password" {...register("password")} />
				<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</>
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