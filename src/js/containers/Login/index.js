import { connect } from 'react-redux';
import Login from './login';

function mapStoreToProps(store) {
    return {
        loading: store.app.loading,
        errors: store.app.errors
    }
}

export default connect(mapStoreToProps)(Login);