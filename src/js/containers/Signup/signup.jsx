import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    signupUser
} from './actions';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
        const newUserData = {
            userType: 'manager',
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        dispatch(signupUser(newUserData, history));
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
     }
    render() {
        const { loading, errors } = this.props;

        return (
            <Grid container className='form'>
                <Grid item sm />
                <Grid item sm>
                    <i className="fab fa-jedi-order fa-4x image"></i>
                    <Typography variant='h2' className='pageTitle'>
                        Signup
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='firstName' name='firstName' type='text' label='First Name' className='textField' onChange={this.handleChange}
                            helperText={errors.firstName} error={errors.firstName ? true : false} value={this.state.firstName} fullWidth/>

                        <TextField id='lastName' name='lastName' type='text' label='Last Name' className='textField' onChange={this.handleChange}
                            helperText={errors.lastName} error={errors.lastName ? true : false} value={this.state.lastName} fullWidth/>

                        <TextField id='email' name='email' type='email' label='Email' className='textField' onChange={this.handleChange}
                            helperText={errors.email} error={errors.email ? true : false} value={this.state.email} fullWidth/>

                        <TextField id='password' name='password' type='password' label='Password' className='textField' onChange={this.handleChange}
                            helperText={errors.password} error={errors.password ? true : false} value={this.state.password} fullWidth/>

                        <TextField id='confirmPassword' name='confirmPassword' type='password' label='Confirm Password' className='textField' onChange={this.handleChange}
                            helperText={errors.confirmPassword} error={errors.confirmPassword ? true : false} value={this.state.confirmPassword} fullWidth/>
                        
                        {errors.general && (
                            <Typography variant='body2' className='customError'>
                                {errors.general}
                            </Typography>
                        )}

                        <Button type='submit' variant='contained' color='default' className='button' id='login-button'>
                            Signup
                            {loading && <CircularProgress size={30} className='progress'/>}
                        </Button>
                        <br/>
                        <small>Already have an account? Login <Link to='/'>Here</Link></small>
                    </form>

                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}