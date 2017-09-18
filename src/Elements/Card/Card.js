import React from 'react';
import PropTypes from 'prop-types';

import { Col, Image } from 'react-bootstrap';
import moment from 'moment';

import './styles.css';

import { Tags } from '../Tags';

const Card = ({event}) => {
    const image = event.coverU || (event.cover && event.cover.Source) || 'http://www.wxmbfm.com/wp-content/uploads/2015/11/events-alumni.jpg';
    return (
        <Col xs={3} md={3}>
            <div className="card-wrapper">
                <Image
                    src={image}
                    alt="event-photo"
                    thumbnail
                />
                <h4>{event.n}</h4>
                <p>{event.start && moment(event.start).format('MMM DD, [at] HH:mm')}</p>
                <Tags tags={event.tags}/>
            </div>
        </Col>
    )
};

Card.propTypes = {
    event: PropTypes.object
};

export default Card;