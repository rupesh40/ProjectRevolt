import React, { Component } from 'react'
import FixedNavigation from './FixedNavigation'
export class Services extends Component {
    render() {
        return (
            <div>
            <FixedNavigation/>
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Services</h2>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Demand On Grid</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">We Get Access To The Info About Grid</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Slot Booking</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">If Available Then Books A Slot</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Range Anxiety</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Provides Exact Range Anxiety For Your Travellling</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4></h4>
                                                <h4 className="subheading">Trip Planner</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Provides Convenient Trip Management</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>Be Part
                  <br />Of Our
                  <br />Services!</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Services