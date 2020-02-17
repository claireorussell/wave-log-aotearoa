import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getSouthBeaches } from '../actions/index'

class South extends React.Component {

        state = {
            beachImg: true
        }
    
        
    componentDidMount() {
        this.props.dispatch(getSouthBeaches())
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


    render() {
        return (
            <div className='container'>
                <h1 className='pageTitle'>South island</h1>

                {this.props.beaches.map(beach => {
                    return (
                        <div className='row log'>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            <div className='info'>
                                <p>{beach.region} region</p>
                                <p>Average swell: {beach.swell}</p>
                                <p>Difficulty level: {beach.difficulty}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        beaches: state.beaches
    }
}

export default connect(mapStateToProps)(South)