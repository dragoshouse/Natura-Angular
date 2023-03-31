import React from 'react'

import PropTypes from 'prop-types'

const ServicesCard = (props) => {
  return (
    <>
      <div className="services-card">
        <div className="services-card-container">
          <svg viewBox="0 0 1024 1024" className="services-card-icon">
            <path d="M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"></path>
          </svg>
        </div>
        <span className="services-card-text">{props.text}</span>
        <span className="services-card-text1">{props.text1}</span>
        <span className="services-card-text2">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .services-card-container {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #f1f2ea;
          }
          .services-card-icon {
            fill: #3dccc7;
            width: 24px;
            height: 24px;
          }
          .services-card-text {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .services-card-text1 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-card-text2 {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}

ServicesCard.defaultProps = {
  text: 'Productos para la salud',
  text1: 'Productos 100% naturales que ayudan a mejorar tu salud.',
  text2: 'Learn more',
}

ServicesCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ServicesCard
