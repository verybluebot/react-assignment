import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.css';

import { SimpleInput } from '../../Elements/SimpleInput';
import { Button } from 'react-bootstrap';


class SortingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _filterByName(text) {
        let newList = cloneDeep(this.props.events);

        newList = newList.filter((a) => a.n.toLowerCase().includes(text));
        this.props.sortEvents(newList);

        this.setState({ text })
    }

    sortByDate() {
        let newList = cloneDeep(this.props.events);

        if (this.state.sortByDate) {
            newList.sort((a, b) => {
                if (a.start > b.start) return 1;
                if (a.start < b.start) return -1;

                return 0;
            });
        } else {
            newList.sort((a, b) => {
                if (a.start < b.start) return 1;
                if (a.start > b.start) return -1;

                return 0;
            });
        }


        this.props.sortEvents(newList);

        this.setState({sortByDate: !this.state.sortByDate})
    }

    onTextChange(text) {
        this._filterByName(text.toLowerCase())
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div className="sorting-bar-wrapper">
                            <Button onClick={() => this.sortByDate()}>Sort By Date</Button>
                            <SimpleInput
                                onChange={(event) => this.onTextChange(event.target.value)}
                                placeholder="Search by event name"
                            />
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

SortingBar.propTypes = {
    sortEvents: PropTypes.func,
    events: PropTypes.array
};

export default SortingBar;