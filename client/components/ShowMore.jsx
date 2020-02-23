import React from 'react'
import { connect } from 'react-redux'



class ShowMore extends React.Component {

    render() {
        return (
            <div>
                    <p>Average swell: {this.props.beach.swell}</p>
                    <p>Break direction: {this.props.beach.break}</p>
                    <h4>Helpful hints ...</h4> 
                  
                    {this.props.beach.extra.map(hint => {
                        console.log(hint)
                        return (
                            <li>{hint}</li>
                        )
                    })}
                <img className='img' src={this.props.beach.image} />
            </div>
        )
    }
}


export default connect()(ShowMore)
