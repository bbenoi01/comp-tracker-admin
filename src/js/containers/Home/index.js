import { connect } from 'react-redux';
import Home from './home';

function mapStoreToProps(store) {
    return {
        quotaId: store.home.quotaId,
        newLines: store.home.newLines,
        upgrades: store.home.upgrades
    }
}

export default connect(mapStoreToProps)(Home);