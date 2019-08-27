import React from 'react';
import { Route } from 'react-router-dom';
import { connect} from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpnner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpnner(CollectionOverview);
const CollectionPageWithSpinner = WithSpnner(CollectionPage);

class ShopPage extends React.Component {
    state = {
      loading: true      
    };
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(
            snapshop => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshop);
                updateCollections(collectionMap);
                this.setState({ loading: false });
            }
        );
    }
    render() {
        const { match } = this.props; 
        const { loading } = this.state;
        return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading}{...props} />} />
            <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner isLoading={loading}{...props} />} />
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);