import React, { Component } from "react";
//import ChargingStation from './ChargingStation'
import "./styles.css";
import { Link } from "react-router-dom";

import PlanTrip from "./PlanTrip.jsx";
import UserForm from "./AddStation/UserForm.js";

export class DashNavigation extends Component {
  state = {
    Page: false,
    showHide: false,
  };
  PAGE = () => {
    //const {page}=this.state
    this.setState({ Page: true });
  };
  handleModalShowHide = () => {
    this.setState({ showHide: !this.state.showHide });
  };
  render() {
    const { showHide, Page } = this.state;
    return (
      <div>
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="">
            REVOLT
          </a>
          <button
            class="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle"
            href="#"
          >
            <i class="fas fa-bars"></i>
          </button>
          <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-1 my-0 my-md-0">
            <div class="input-group">
              <input
                class="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="userDropdown"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-fw"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="">
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              class="sb-sidenav accordion sb-sidenav-dark "
              id="sidenavAccordion"
            >
              <div class="sb-sidenav-menu">
                <div class="nav">
                  <a class="nav-link" href="#Page" onClick={this.PAGE}>
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>
                    Add Station
                  </a>

                  <a
                    class="nav-link"
                    href="#p"
                    onClick={this.handleModalShowHide}
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>
                    Make your trip
                  </a>

                  <a class="nav-link">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-history"></i>
                    </div>
                    Recent Activity
                  </a>

                  <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-bookmark"></i>
                    </div>
                    Bookmarks
                  </a>

                  <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-question-circle"></i>
                    </div>
                    Help
                  </a>

                  <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-comment-alt"></i>
                    </div>
                    Feedback
                  </a>
                </div>
              </div>
              <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                User Name
              </div>
            </nav>
          </div>
          <div id="p" style={{ backgroundSize: "cover", margin: "" }}>
            {showHide && (
              <PlanTrip
                showHide={showHide}
                handleModalShowHide={this.handleModalShowHide}
              />
            )}
          </div>
          <div i="Page">{Page && <UserForm />}</div>

          <div id="layoutSidenav_content">
            <main></main>
            <footer class="py-4 bg-light mt-auto">
              <div class="container-fluid">
                <div class="d-flex align-items-center justify-content-between small">
                  <div class="text-muted">Copyright &copy; Revolt Team</div>
                  <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default DashNavigation;
