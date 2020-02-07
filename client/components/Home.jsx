import React from 'react'

import { Link } from 'react-router-dom'

import {getLocations} from '../api/index'

class Home extends React.Component {
    
    locationData = {} // var to update in didmount and access in render

    componentDidMount(){
        getLocations()
        .then((locations) => { // dealing with async --- promises
            this.locationData=locations
            console.log(this.locationData)
        })
       
    }


    render() {
    return (
        <div className='homeBody'>
            <h2 className='aotearoaTitle'>Aotearoa</h2>
            <h1 className='mainTitle'>Wave log</h1>
           
            <section>
                <div>
                    <button className='btn btn-warning'><Link to={'/north'}>North</Link></button>
                    <button className='btn btn-warning'><Link to={'/south'}>South</Link></button>
                </div>
                <button className='btn btn-warning'><Link to={'/share'}>Share</Link></button>
            </section>
        </div>
    )
    }
}

export default Home