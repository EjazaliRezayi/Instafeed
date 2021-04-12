import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
  
const like = () => {
  
  return (
    <div style={{
      margin: 13
    }}>

      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
       
                  checkedIcon={<Favorite />}
    />}
    />
    </div>
  );
}
  
export default like;