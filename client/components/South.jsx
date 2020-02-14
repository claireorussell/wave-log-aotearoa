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
            <section className='compBody'>
                <div>
                    <h1 className='pageTitle'>South island</h1>
                    <Link to={'/'}><button className='btn btn-warning'>Home</button></Link>
                </div>
                <div className='info'>
                {this.props.beaches.map(beach => {
                    console.log(beach)
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
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        beaches: state.beaches
    }
}

export default connect(mapStateToProps)(South)