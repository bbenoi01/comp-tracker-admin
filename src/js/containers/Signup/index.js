import { connect } from 'react-redux';
import Signup from './signup';

function mapStoreToProps(store) {
    return {
        loading: store.app.loading,
        errors: store.app.errors
    }
}

export default connect(mapStoreToProps)(Signup);