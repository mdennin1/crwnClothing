import React from 'react';
import MenuItem from '../menuItem/menuItem';
import Sections from './sectionData';
import './directory.css';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: Sections,
        }
    }
    //
    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id, imageUrl, size, title}) =>{
                    return(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )
                })}
            </div>
        );
    }
}
//
export default Directory;