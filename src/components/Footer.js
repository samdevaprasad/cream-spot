import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>About</h5>
              </li>
              <li className="list-unstyled">
                <a href="#!">Founding</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">The Team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Business</h5>
              </li>
              <li className="list-unstyled">
                <a href="#!">Advertise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sales</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Jobs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sponsors</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Legal</h5>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms Of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Community Guidelines</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy</a>
              </li>
              <li className="list-unstyled" style={{'padding-top': '10px'}}>
                <h5>Other</h5>
              </li>
              <li className="list-unstyled">
                <a href="#!">Tickets</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Merchandise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">World Tour</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Social</h5>
              </li>
              <li className="list-unstyled">
                <a href="#!">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Myspace</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Tinder</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Brazzers</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: TrillTeno &amp; BrickWallSofa Productions
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
