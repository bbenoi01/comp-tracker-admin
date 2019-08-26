import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    loginUser
} from './actions';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { dispatch, history } = this.props;
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        dispatch(loginUser(userData, history));
    }

    render() {
        const { loading, errors } = this.props;

        return (
            <Grid container className='form'>
                <Grid item sm/>
                <Grid item sm>
                    <i className="fab fa-jedi-order fa-4x image"></i>
                    <Typography variant='h2' className='pageTitle'>
                        Admin Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='email' name='email' type='email' label='Email' className='text-field' onChange={this.handleChange}
                            helperText={errors.email} error={errors.email ? true : false} value={this.state.email} fullWidth/>

                        <TextField id='password' name='password' type='password' label='Password' className='text-field' onChange={this.handleChange}
                            helperText={errors.password} error={errors.password ? true : false} value={this.state.password} fullWidth/>
                        
                        {errors.general && (
                            <Typography variant='body2' className='custom-error'>
                                {errors.general}
                            </Typography>
                        )}

                        <Button type='submit' variant='contained' color='default' id='login-button'>
                            Login
                            {loading && <CircularProgress size={30} className='progress' />}
                        </Button>
                        <br/>

                        <small>Don't have an account? Sign up <Link to='/signup'>Here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}