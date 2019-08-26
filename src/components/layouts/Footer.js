import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-ustyled">
                <li>Lorem ipsum Address</li>
                <li>Lorem ipsum Phone</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-ustyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-ustyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-ustyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
    }

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;

}

ul li a {
  color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}
`;
