import { Component } from 'react';
import '../App.css';

class Button extends Component {

  render(){
    return (
      <div>
        <a href={this.props.link}>
          <span className="Button">
            {this.props.title}
          </span>
        </a>
      </div>
    )
  };
}

export default Button;
