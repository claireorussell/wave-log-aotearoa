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
                    <div className='info'>
                {this.props.beaches.map(beach => {
                    return (
                        <section className='section' onClick={this.handleChange}>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            {this.props.beachImg == true ? <img className='beachInfo' src={beach.image} /> : <div>
                                <p>Find me in {beach.region} region</p>
                                <p>My average swell size is {beach.swell}</p>
                                <p>The level of difficulty is {beach.difficulty}</p>
                            </div>
                            }
                        </section>
                    )
                })}
            </div>
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