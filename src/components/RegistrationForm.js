import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
// import './RegistrationForm.css';

const RegistrationForm = (props) => {
    const teacherDefaultState = {
        name: "",
        email: "",
		password: ""
    };
    
    const [teacherFormData, setTeacherFormData] = useState(teacherDefaultState);
    const [isHidden, setIsHidden] = useState(false);
    
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
    const hiddenFormText = isHidden ? 'Show Teacher Registration Form' : 'Hide Teacher Registration Form';

    return (
    <section>
        <div className={hiddenClass}>
            <p className='title'>New Teacher Registration</p>
            <form className='Registration' onSubmit={handleSubmit} >
                <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={handleChange} value={teacherFormData.name}></input>
                </div>
                <div>
                <label htmlFor="email"> Email: </label>
                <input type="text" id="email" name="email" onChange={handleChange} value={teacherFormData.email}></input>
                </div>
                <div>
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" name="password" onChange={handleChange} value={teacherFormData.password}></input>
                </div>
                <div>
                <input type="submit" value="Sign up" style={{ backgroundColor: "#a1eafb" }}></input>
                </div>
            </form>
        </div>
        <button onClick={toggleHiddenForm}>{hiddenFormText}</button>
    </section>
    );
};


// const RegistrationForm = (props) => {

	// const { register, handleSubmit, formState: { errors } } = useForm();

	// const onSubmit = (data) => console.log(data);
	// const [formFields, setFormFields] = useState({
    //     name: '',
    //     email: '',
	// 	password: ''
    // });

    // const onNameChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         name: event.target.value
    //     })
    // };

    // const onEmailChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         email: event.target.value
    //     })
    // };

	// const onPasswordChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         password: event.target.value
    //     })
    // };

	// return (
	// 	<form>
    //         <div>
    //             <label htmlFor="fullName">Name:</label>
    //             <input
    //                 name="fullName"
    //                 value={formFields.name}
    //                 onChange={onNameChange} />
    //         </div>
    //         <div>
    //             <label htmlFor="email">Email:</label>
    //             <input name="email"
    //                 value={formFields.email}
    //                 onChange={onEmailChange} />
    //         </div>
	// 		<div>
	// 			<label>Password:</label>
	// 			<input 
	// 				password="password"
    //                 value={formFields.password}
    //                 onChange={onPasswordChange} />
	// 		</div>
    //         <input
    //             type="submit"
    //             value="Register Teacher" />
    //     </form>
		// <>
		// 	<p className="title">Registration Form</p>

		// 	<form className="Registration" onSubmit={handleSubmit(onSubmit)}>
		// 		<label>Name:</label>
		// 		<input type="name" {...register("name")} />
		// 		<label>Email:</label>
		// 		<input type="email" {...register("email", { required: true })} />
		// 		{errors.email && <span style={{ color: "red" }}>
		// 			*Email* is mandatory </span>}
		// 		<label>Password:</label>
		// 		<input type="password" {...register("password")} />
		// 		<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
		// 	</form>
		// </>
	// );
// }

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