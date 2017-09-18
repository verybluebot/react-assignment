import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row} from 'react-bootstrap'

import { Card } from '../../Elements/Card';

const CardList = ({events}) => {

    const renderCards = () => {
        if (!events) return;

        return events.map((e, i) => {
            return <Card key={i} event={e} />
        })
    };

    return (
        <Grid>
            <Row>
                {renderCards()}
            </Row>
        </Grid>
    )
};

CardList.propTypes = {
    events: PropTypes.array
};

export default CardList;

