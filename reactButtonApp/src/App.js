import React, { Component } from 'react';
import { Link } from 'react-router';
class App extends Component {
    constructor() {
        super();
        this.state = {
            tab: 'cost'
        };
    }
    update(e) {
        this.setState({ tab: e.target.value });
    }
    render() {
        const param = this.props.params.comp;
        let display;
        if (param === 'A') {
            display = (<div>
        <Link to='/B'><button>Goto B</button></Link>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost">cost</option>
          <option value="fte">fte</option>
        </select>
        <div> This is A with {this.state.tab}</div>
      </div>);
        } else if (param === 'B') {
            display = (<div>
      <Link to='/A'>  <button>Goto A</button></Link>
        <select onChange={this.update.bind(this)} value={this.state.tab}>
          <option value="cost" >cost</option>
          <option value="fte" >fte</option>
        </select>
        <div> This is B with {this.state.tab}</div>
      </div>);
        } 
    
        return (display);
    }
}

export default App;