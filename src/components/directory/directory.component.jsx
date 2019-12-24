import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          sections : [  {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats',
                subtitle: 'SHOP NOW'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets',
                subtitle: 'SHOP NOW'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers',
                subtitle: 'SHOP NOW'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl: 'shop/womens',
                subtitle: 'SHOP NOW'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens',
                subtitle: 'SHOP NOW'
              },
             /* For dynamic class
             {
                title: 'extra dibba',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 6,
                size: 'small',
                linkUrl: 'shop/sneakers',
                subtitle: 'SHOP NOW'
              }*/
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
 
            {/*
            This is one way of mapping but we need to write section again and again
            thus to get rid of this we are using the method mentioned below

            {this.state.sections.map(section => (
                 <MenuItem key={section.id} title={section.title} />
                 ))} 
                 
            */}

                {/* 
                We use this method when we have less keys to fetch from a collection,
                we can use the below method else refer the "spread ... operator" for big lists of keys
                {this.state.sections.map(({title, imageUrl, id, subtitle, size, linkUrl}) => (
                 <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                 ))} */}

                 
                {this.state.sections.map(({id, ...otherSectionsprops}) => (
                 <MenuItem key={id} {...otherSectionsprops}/>
                 ))}


            </div>
         
        );
    }
}


export default Directory; 