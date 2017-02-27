import React,{Component} from 'react';
import {Link} from 'react-router';
export default class HeadComponent extends Component{
    update(event)
    {
        this.props.checkUpdate(event.target.value);
  }
    render()
{
        let linkTo = '/'+this.props.buttonValue;
        return(
<div>
  <Link to={linkTo}><button>Goto{this.props.buttonValue}</button></Link>
  <select onChange={this.update.bind(this)} value={this.props.initialTab}>
    <option value="Cost">Cost</option>
    <option value="FTE">FTE</option>
  </select>
</div>
);
    }
}