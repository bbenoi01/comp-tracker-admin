import { connect } from 'react-redux';
import Navbar from './navbar';

function mapStoreToProps(store) {
    return {
        authenticated: store.app.authenticated
    }
}

export default connect(mapStoreToProps)(Navbar);