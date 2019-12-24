import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'
class HomeComponent extends React.Component{

    render(){
        return(
            <div className="homepage">
            <Directory />
            </div>
        );
    }

}


export default HomeComponent;
