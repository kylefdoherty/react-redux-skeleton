import React from 'react';

export default React.createClass({
  render() {
    return(
      <div className='greeting'>
        Hola, {this.props.name}
      </div>
    )
  }
});
