import React from 'react'

import { Link } from 'react-router-dom'

import { getSouthBeaches } from '../api/index'

class South extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            beachData: []
        }
    }
    componentDidMount() {
        console.log('hi')
        getSouthBeaches()
            .then(beaches => {
                console.log(beaches)
                this.setState({ beachData: beaches })
            }) // assigning data to a variable to use in render 
    }



    render() {
        return (
            <div>

                <Link to={'/'}><button className='btn btn-warning'>home</button></Link>
                <div className='smallBody'>
                    <h1>South island</h1>




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
            </div>
        )
    }


}

export default South