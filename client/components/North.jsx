import React from 'react'
import { Link } from 'react-router-dom'

import { getNorthBeaches } from '../api/index'
//import data from getBeaches api file



class North extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            beachData: []
        }

    }

    componentDidMount() {
        console.log('hi')
        getNorthBeaches()
            .then(beaches => {
                console.log(beaches)
                this.setState({ beachData: beaches })
            }) // assigning data to a variable to use in render 
    }

    render() {
        return (
            <div>
                <div>
                    <h1>North island</h1>
                    <button className='btn btn-warning'><Link to={'/'}>home</Link></button>
                </div>


                {this.state.beachData.map(beach => {
                    console.log(beach)
                    return (
                        <section className='section'>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            <img className='beachImage' src={beach.image} />
                        </section>
                    )
                })}

            </div>
        )
    }
}

export default North



/*
create route file to use new server route /

*/