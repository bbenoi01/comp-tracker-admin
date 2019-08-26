import React, { Component, Fragment } from 'react';
import MyButton from '../../util/myButon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import {
    logoutUser,
    updateMetrics
} from './actions';

export default class Navbar extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser())
    }

    handleClear = () => {
        const { dispatch } = this.props;
        const userMetrics = {
            hum: 0,
            humx: 0,
            other: 0,
            tablets: 0,
            jetpacks: 0,
            virtual: 0,
            desktop: 0,
            whp: 0,
            features: 0,
            multi: 0,
            single: 0,
            techCoach: 0,
            ew: 0,
            addLine: 0,
            accessories: 0
        }
        dispatch(updateMetrics(userMetrics))
    }

    render() {
        const { authenticated } = this.props;
        
        return (
            <AppBar id='appBar'>
                <Toolbar className='nav-container'>
                    {authenticated ? (
                        <Fragment>
                            <MyButton tip={'Clear'} onClick={this.handleClear}>
                                <ClearAllIcon />
                            </MyButton>
                            <DoneIcon id='logo'/>
                            <MyButton tip='Logout' onClick={this.handleLogout}>
                                <KeyboardReturnIcon />
                            </MyButton>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Typography>
                                Comp
                            </Typography>
                            <DoneIcon id='logo'/>
                            <Typography>
                                Tracker
                            </Typography>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}