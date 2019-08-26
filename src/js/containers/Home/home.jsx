import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import {
    getQuota,
    updateQuota
} from './actions';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newLines: '',
            upgrades: ''
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getQuota());
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const { dispatch, quotaId } = this.props;
        const quota = {
            newLines: parseInt(this.state.newLines),
            upgrades: parseInt(this.state.upgrades)
        };
        dispatch(updateQuota(quota, quotaId));
        this.setState({
            newLines: '',
            upgrades: ''
        })
    }

    render() {
        const { newLines, upgrades } = this.props;

        return (
            <Grid container spacing={2}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="Quota" className='card-header'/>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <b>New:</b> {newLines}
                                </Grid>
                                <Grid item xs={6}>
                                    <b>Upgrades:</b> {upgrades}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id='new' name='newLines' type='text' label='New' className='text-field' onChange={this.handleChange} fullWidth/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id='upgrades' name='upgrades' type='text' label='Upgrades' className='text-field' onChange={this.handleChange} fullWidth/>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className='card-actions'>
                            <div style={{margin: 'auto'}}>
                                <Button variant='text' onClick={this.handleSubmit}>
                                    Submit
                                </Button>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}/>
            </Grid>
        );
    }
}