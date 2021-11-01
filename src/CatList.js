import React from 'react';

const CatList = props => {
  const renderCats = () => props.catPics.map(cat => {
    return (<img src={cat.url} key={cat.id} alt=""></img>)
  })
  return (
    <div>
      {renderCats()}
    </div>
  );
};

export default CatList;