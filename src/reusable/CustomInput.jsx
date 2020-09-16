import React from 'react'

const CustomInput = (
    { showError, errorMessage, isRequired,
        handleChange, pattern, ...otherProps
    }) => (
        <div>
            <input
                {...otherProps}
                onChange={(e) => handleChange(e, pattern)}
            />
            {showError && <label> {errorMessage}</label>}
        </div >
    )

export default CustomInput