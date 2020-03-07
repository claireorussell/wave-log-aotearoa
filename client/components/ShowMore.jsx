import React from 'react'
import { connect } from 'react-redux'



class ShowMore extends React.Component {

    render() {
        return (
            <div className='showMore'>
                <div className='beachImg'>
                    <img className='img' src={this.props.beach.image} />
                </div>
                <div className='infoTwo'>
                    <p>Average swell: {this.props.beach.swell}</p>
                    <p>Break direction: {this.props.beach.break}</p>
                    <h3>Helpful hints</h3>
                    {this.props.beach.extra.map(hint => {
                        console.log(hint)
                        return (
                            <li>{hint}</li>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default connect()(ShowMore)
