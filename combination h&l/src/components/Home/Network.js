import React, { Component } from 'react'
import Portfolio from './Portfolio.jsx'

export class Network extends Component {
    render() {
        const portfolioLinks = [
            {
                title: 'Chargepoint',
                caption: 'Best At EV Charging'
            },
            {
                title: 'BC HYDRO EV',
                caption: 'Power Smart'
            },
            {
                title: 'Blink',
                caption: 'Blink Network'
            },

        ]
        return (
            <div>
                <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

                
            </div>
        )
    }
}

export default Network