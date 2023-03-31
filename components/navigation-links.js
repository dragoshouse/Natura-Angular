import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="#nosotros" className="navigation-links-link Navigation-Link">
          {props.link2}
        </a>
        <a href="#productos" className="navigation-links-link1 Navigation-Link">
          {props.link3}
        </a>
        <a href="#contacto" className="navigation-links-link2 Navigation-Link">
          {props.link4}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
          }
          .navigation-links-link:hover {
            color: var(--dl-color-scheme-brown);
          }
          .navigation-links-link1 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
          }
          .navigation-links-link1:hover {
            color: var(--dl-color-scheme-brown);
          }
          .navigation-links-link2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
            text-decoration: none;
          }
          .navigation-links-link2:hover {
            color: var(--dl-color-scheme-brown);
          }

          .navigation-links-root-class-name17 {
            margin-right: var(--dl-space-space-threeunits);
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Productos',
  rootClassName: '',
  link2: 'Nosotros',
  link4: 'Contáctanos',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
