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
                <a href="https://venmo.com/sammydollabills">Founding</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">The Team</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Contact</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <ul>
              <li className="list-unstyled">
                <h5>Business</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Advertise</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Sales</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Jobs</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Sponsors</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Careers</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Legal</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Terms Of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Community Guidelines</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Privacy</a>
              </li>
              <li className="list-unstyled" style={{'padding-top': '10px'}}>
                <h5>Other</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Tickets</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Merchandise</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">World Tour</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <h5>Social</h5>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">LinkedIn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://venmo.com/sammydollabills">Myspace</a>
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
