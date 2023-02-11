import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

/**
* @author
* @class Detail
**/

class Detail extends Component {
 state = {}
 render() {
  return(
    <Layout>
    <div className="a_dtl_prodCont container tbdr bg-white">
      <div className='row h-100'>
        <div className='col-5 tbdr'>
          <div style={{width:'345px', height:'490'}}>
            <img src="https://m.media-amazon.com/images/I/71UXbfMHImS._UY445_.jpg" />
          </div>
        </div>
        <div className='col-7 tbdr'></div>

      </div>
      </div>
    </Layout>
    )
   }
 }



export default Detail