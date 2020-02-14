import React from 'react'
import { Link } from 'react-router-dom'

import { getNorthBeaches } from '../api/index'
//import data from getBeaches api file



class North extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            beachData: [],
            beachImg: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log('hi')
        getNorthBeaches()
            .then(beaches => {
                console.log(beaches)
                this.setState({ beachData: beaches })
            }) // assigning data to a variable to use in render 
    }

    handleChange(e) {
        e.preventDefault()
        if (this.state.beachImg == true) {
            this.setState({
                beachImg: false,
            })
        } else {
            this.setState({
                beachImg: true,
            })
        }
    }
// have each beach in it's own component

    render() {
        return (
            <div className='compBody'>
                <div>
                    <h1 className='pageTitle'>North island</h1>
                    <button className='btn btn-warning'><Link to={'/'}>Wave home</Link></button>
                </div>

                {this.state.beachData.map(beach => {
                    console.log(beach)
                    return (

                        // <Beach pass props></Beach>
                        <section className='section' onClick={this.handleChange}>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            {this.state.beachImg == true ? <img className='beachImage' src={beach.image} /> : <div className='info'>
                                <p>Find me in {beach.region} region</p>
                                <p>My average swell size is {beach.swell}</p>
                                <p>The level of difficulty is {beach.difficulty}</p>
                            </div>
                            }
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