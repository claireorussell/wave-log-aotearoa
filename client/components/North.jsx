import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import data from getBeaches api file
import { getNorthBeaches } from '../actions/index'



class North extends React.Component {

    componentDidMount() {
        this.props.dispatch(getNorthBeaches())

    }

    render() {
        return (
            <div className='container'>
                <h1 className='pageTitle'>North island</h1>

                {this.props.beaches.map(beach => {
                    return (
                        // add a link a pop up component to display all information or a ternery to see which type of display you have.... simple display or more info + picture display
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

export default connect(mapStateToProps)(North)
