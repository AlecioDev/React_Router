import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='footer'>
        <h1>Bem-vindo à página Home!</h1>
        <Link to="/Contact"><button className="buttondois">Contato</button></Link>
        <Link to="/About"><button className="buttondois">Sobre</button></Link>
      </div>
    );
  };
}

export default Home;
