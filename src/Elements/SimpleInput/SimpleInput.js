import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const SimpleInput = (props) => {
    return (
        <FormGroup>
            <FormControl {...props} />
        </FormGroup>
    )
};

export default SimpleInput;