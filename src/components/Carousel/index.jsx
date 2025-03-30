import { theme } from '../../styles/theme'

import { Carousel } from 'antd'
const contentStyle = {
  margin: 0,
  height: '570px',
  width: '100%',
  color: '#fff',
  lineHeight: '570px',
  textAlign: 'center',
  background: `${theme.colors.secondary}`
}
const App = () => (
  <>
    <Carousel arrows dotPosition="left" infinite={true}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1584697964069-229fdf62aa30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={contentStyle}
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={contentStyle}
        />
      </div>
      <div>
        <img src='https://images.unsplash.com/photo-1585432959322-4db03962b004?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={contentStyle}/>
      </div>
      <div>
        <img src='https://images.unsplash.com/photo-1648420325602-0476ebe076d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={contentStyle}/>
      </div>
    </Carousel>
  </>
)
export default App
