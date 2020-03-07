import React from 'react'
import { connect } from 'react-redux'
import { fetchApiRaglan } from '../actions' // why do some go in curly and some not 
// import fetchApiPortugal from '../actions'

class MagicSeaweed extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchApiRaglan())
        // this.props.dispatch(fetchApiPortugal())
    }


    render() {
        console.log(this.props.raglanMagic)
        return (
            <div>
                {this.props.raglanMagic &&
                    <div className='extApi'>

                        <h1 className='pageTitle'>Favourite breaks</h1>
                        <section className="apiOne log">
                            <h3>Manu bay </h3>
                            <h4>Raglan, Aotearoa</h4>
                       
                            <p>Average water temperature: {this.props.raglanMagic.temperature} degrees</p>
                           
                        </section>

                        <section className="apiTwo log">
                            <h3>Praia das Macas </h3>
                            <h4>Sintra, Portugal</h4>

                            {/* ext */}
                            <img src='' />
                        </section>
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        raglanMagic: state.raglanMagic
    }
}

export default connect(mapStateToProps)(MagicSeaweed)