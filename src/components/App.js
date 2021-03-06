/**
 * Created by demmith on 7/5/2017.
 */
import React from 'react';

import Menu from './Menu';

/*
  App component
 */
export default class App extends React.Component {
  render() {
    // render return
    return(
      <div className="container">
        <div className="row">
          <Menu/>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
