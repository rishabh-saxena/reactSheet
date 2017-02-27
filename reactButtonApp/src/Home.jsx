import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (<div className='button'>
      <Link to='/A'><button>A</button></Link>
      <Link to='/B'><button>B</button></Link>
    </div>)
  }
}

export default Home