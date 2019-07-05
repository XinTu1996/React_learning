import React from "react";
import { Container, Row } from "reactstrap";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="https://blog.creative-tim.com" target="_blank" rel="noopener noreferrer">"
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {1900 + new Date().getYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Creative Tim
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;