import React from 'react'

import { connect } from 'react-redux'


class MagicSeaweed extends React.Component {

    render() {
        return (
            <div className='extApi'>
                    <h2>Favourite breaks</h2>
                    <section className="apiOne log">
                        <h3>Manu bay </h3>
                        <h4>Raglan, Aotearoa</h4>
                        {/* ext api */}
                    </section>

                    <section className="apiTwo log">
                        <h3>Praia das Macas </h3>
                        <h4>Sintra, Portugal</h4>
                        {/* ext */}
                    </section>
                </div>
        )
    }
}

export default connect()(MagicSeaweed)