import React from 'react';
import PropTypes from 'prop-types';
import './RegistrationForm.css';


const RegistrationForm = (props) => {
    return (
        <>
            <p className="title">Registration Form</p>
 
            <form className="Registration">
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
};

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