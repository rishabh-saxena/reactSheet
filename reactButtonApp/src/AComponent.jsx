import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
export default class AComponent extends Component{
    optionValue(event)
  {
        console.log(event.target.value);
    }
    render()
    {
        return (
        <div>
        <Link to='/b'><button>GotoB</button></Link> 
        <select onChange={this.optionValue.bind(this)}>
        <option value="cost">Cost</option>
         <option value="fte">FTE</option>
         </select> 
         <p>
         {/*<Print content={''}/>*/}
        </p>
        </div>
      );
    }
}