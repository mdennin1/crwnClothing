import React from 'react';
import './collectionPreview.scss';
import CollectionItem from '../../components/collectionItem/collectionItem';
import { connect } from 'react-redux';
//selectors
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
//
const CollectionPreview = ({title, items}) =>(
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, index)=> index < 4).map(item =>(<CollectionItem key={item.Id} item={item} />))
            }
        </div>
    </div>
)
//
const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})
export default connect(mapStateToProps)(CollectionPreview);