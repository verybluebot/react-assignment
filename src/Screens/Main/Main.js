import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEvents } from '../../Actions/main';

import { CardList } from '../../ScreenElements/CardList';
import { SortingBar } from '../../ScreenElements/SortingBar';
import { Map } from '../../Elements/Map';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.events.length > 0) {
            this.setState({events: nextProp.events});
        }
    }

    componentDidMount() {
        this.props.getEvents();
        this.setState({events: this.props.events})
    }

    sortEvents(events) {
        this.setState({ events })
    }

    render() {
        return (
            <div>
                <Map events={this.props.events}/>
                <SortingBar
                    events={this.props.events}
                    sortEvents={(events) => this.sortEvents(events)
                    } />
                <CardList events={this.state.events} />
            </div>
        )
    }
}

Main.propTypes = {
    // actions
    getEvents: PropTypes.func,

    // props form state
    events: PropTypes.array
};

const mapStateToProps = (state) => ({
    events: state.main.events
});

export default connect(mapStateToProps, {getEvents})(Main);