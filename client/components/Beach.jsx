import React from 'react'
import { connect } from 'react-redux'
import ShowMore from './ShowMore'

class Beach extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMore: false
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState({
            showMore: !this.state.showMore
        })
    }



    render() {
        const beach = this.props.beach 
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
                {this.state.showMore ? <button className='btn' onClick={this.handleClick}>X</button> : <button className='btn' onClick={this.handleClick}>+</button>}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        beaches: state.beaches
    }
}

export default connect(mapStateToProps)(Beach)