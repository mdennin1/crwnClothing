import React, { useEffect } from 'react';
import MenuItem from '../menuItem/menuItem';
import './directory.css';
import { connect } from 'react-redux';
//selectors
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
    useEffect(() =>console.log(`%c**directory**: ${JSON.stringify(sections)}`, 'color: blue'), [sections]);
    return(
        <div className="directory-menu">
            {
                sections?.map(({id, imageUrl, size, title}) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))
            }
        </div>
    );
};
//
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);