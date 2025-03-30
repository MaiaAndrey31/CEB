import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types'
import { theme } from '../../styles/theme';


const App = ({titles, content}) => (
  <Card
    title={titles}
    variant="borderless"
    
    style={{
      width: 400,
      backgroundColor: '#F7DE58',
      fontFamily:'Sports-World',
      fontWeight: 600,
      fontSize: 18,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 400,
      
    }}
  >
    <p style={{fontFamily:'Poppins'}}>{content}</p>
    
  </Card>
);
export default App;


App.propTypes = {
    titles: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }