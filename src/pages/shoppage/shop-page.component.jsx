import React from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shop.data.js';
import PreviewCollections from '../../components/previewcollections/previewcollections.component';


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        collections : SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
          <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollections key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
      }
    }
    

export default ShopPage;