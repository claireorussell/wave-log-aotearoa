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
                <div>
                    <h1>South island</h1>
                    <button className='btn btn-warning'><Link to={'/'}>home</Link></button>
                </div>


                {this.state.beachData.map(beach => {
                    console.log(beach)
                    return (
                        <section>
                            <h3>{beach.name}</h3>
                            <img src={beach.image} />
                        </section>
                    )
                })}

            </div>
        )
    }


}

export default South