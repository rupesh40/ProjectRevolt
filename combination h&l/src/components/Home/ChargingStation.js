import React, { Component } from 'react'
import FixedNavigation from './FixedNavigation'
export class ChargingStation extends Component {
    render() {
        return (
            <div>
            <FixedNavigation/>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="section-heading text-uppercase">Find the Charging Station Beforehand</h3>
                                <h3 className="section-subheading text-muted"> </h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Charging Station</h4>
                                <p className="text-muted"></p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Your Car Type</h4>
                                <p className="text-muted"></p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Reserve the Grid</h4>
                                <p className="text-muted"></p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Book The Slot</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ChargingStation