// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component {
  render() {
    console.log(this.props.children[0])

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
      {children}
      </div>
    )
  }
}

export default ThemedDecoration;
