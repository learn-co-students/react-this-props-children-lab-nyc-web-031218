// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const theme = this.props.theme

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: theme
      })
    })

    return(
      <div className="themed-decorations">
        {children}
      </div>
    )
  }
}
