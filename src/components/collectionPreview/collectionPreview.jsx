import React from 'react';
import './collectionPreview.scss';
import CollectionItem from '../../components/collectionItem/collectionItem';
//
const CollectionPreview = ({title, items}) =>(
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, index)=> index < 4).map(item =>
                <CollectionItem key={item.Id} item={item} />
            )}
        </div>
    </div>
)
//
export default CollectionPreview;