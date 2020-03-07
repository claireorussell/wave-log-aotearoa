import React from 'react'
import { connect } from 'react-redux'
//import data from getBeaches api file
import { getNorthBeaches } from '../actions/index'
import ShowMore from './ShowMore'



class North extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMore: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.props.dispatch(getNorthBeaches())
    }


    handleClick() {
        this.setState({
            showMore: !this.state.showMore
        })
    }



    render() {

        return (
            <div className='container'>
                <h1 className='pageTitle'>North island</h1>

                {this.props.beaches.map((beach, i) => {
                    return (
                        <section>
                            <div className='row log'>
                                <h3 className='waveTitle'>{beach.name}</h3>

                                <div className='info'>
                                    <p>{beach.region} region</p>
                                    <p>Difficulty level: {beach.difficulty}</p>

                                    {this.state.showMore && <ShowMore beach={beach} />}
                                </div>

                            </div>
                            {this.state.showMore ? <button className='btn' onClick={this.handleClick}>Show less</button> : <button className='btn' onClick={this.handleClick}>Show more good stuff</button>}
                        </section>
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
