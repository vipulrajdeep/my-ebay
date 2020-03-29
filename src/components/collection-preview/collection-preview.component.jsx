import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherCollectionProps}) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
