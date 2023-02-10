import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

/**
* @author
* @class Layout
**/

class Layout extends React.Component {
    constructor(props) {
        super(props)
      }
 render() {
  return(
   <React.Fragment>
    <Header/>
    {this.props.children}
    <Footer/>
   </React.Fragment>
    )
   }
 }


Layout.propTypes = {}
export default Layout