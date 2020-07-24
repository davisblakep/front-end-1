import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Values from '../lists/Values'


const DashboardValues = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/dashboard')
    }

    return(
        <div className="dashboardValues">
            <Button onClick={submit} variant='outlined'>User Confirms Values they wanted</Button>
            <Values />
        </div>
    )
}

export default DashboardValues;