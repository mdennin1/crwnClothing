import React from 'react';
import { connect } from 'react-redux';
import './collectionsOverview.scss';
//components
import CollectionPreview from '../../components/collectionPreview/collectionPreview';
//selectors
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) =>{
    return(
        <div className='collections-overview'>
            {
                collections?.map(({Id, ...otherCollectionProps})=>(<CollectionPreview key={Id} {...otherCollectionProps} />))
            }
        </div>
    )
}
//
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);