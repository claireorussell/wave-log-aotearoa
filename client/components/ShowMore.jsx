import React from 'react'
import { connect } from 'react-redux'



class ShowMore extends React.Component {

    render() {
        return (
            <div className='info two'>
                <div>
                    <p>Average swell: {this.props.beach.swell}</p>
                    <p>Break direction: {this.props.beach.break}</p>
                    <h3>Helpful hints</h3> 
                    </div>
                    {this.props.beach.extra.map(hint => {
                        console.log(hint)
                        return (
                            <p>{hint}</p>
                        )
                    })}
                <img className='img' src={this.props.beach.image} />
            </div>
        )
    }
}


export default connect()(ShowMore)
