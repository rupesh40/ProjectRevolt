import React, { Component } from 'react'

export class Trip extends Component {
    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Make Your Trip</h2>
                                <h3 className="section-subheading text-muted"></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="CURRENT LOCATION (City,State,etc) *" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="DESTINATION (City,State,etc) *" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="ARRIVAL DATE *" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="DEPARTURE DATE *" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="TENTATIVE TIMING *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">FIND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>




                
                
            </div>
        )
    }
}

export default Trip