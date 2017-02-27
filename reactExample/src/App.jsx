import React, { Component } from 'react';
import HeadComponent from './HeadComponent';
import BodyComponent from './BodyComponent';
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {modeof:'cost'};
    }
    update(mode)
    {
        this.setState({modeof:mode});
    }
    render() {
      
        let param = this.props.params.para;
        let antiparam;
        if(param === 'A')
        {
            antiparam = 'B';
        }
        else
        {
            antiparam = 'A';
        }
        return(
          <div>
          <HeadComponent details={this.state.modeof} buttonValue={antiparam} checkUpdate={(mode)=>{  
              this.update(mode);
          }} initialTab={this.state.modeof}/> 
          <BodyComponent mode={this.state.modeof} currentButton={param}/>
        </div>
        );
    }
}

export default App;
