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
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button style={{color: "black", backgroundColor: "white"}} onClick={submit} variant='outlined'>Done</Button>
            </div>
            <Values />
        </div>
    )
}

export default DashboardValues;