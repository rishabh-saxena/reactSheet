import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
export default class AComponent extends Component{
  optionValue(event)
  {
    
  }
    render()
    {
      return (
        <div>
        <Link to='/a'><button>GotoA</button></Link> 
        <select>
        <option value="cost" onSelect={this.optionValue.bind(this,'cost')}>Cost</option>
         <option value="fte" onSelect={this.optionValue.bind(this,'fte')}>FTE</option>
         </select> 
         <p>
         {/*<Print content={}/>*/}
        </p>
        </div>
      );
    }
}