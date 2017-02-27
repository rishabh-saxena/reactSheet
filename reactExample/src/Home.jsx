import React,{Component} from 'react';
import {Link} from 'react-router';
export default class Home extends Component
{
    render()
  {
        return (
<div>
<Link to='/A'><button>A</button></Link>
<Link to='/B'><button>B</button></Link>
</div>
);
    }
}
