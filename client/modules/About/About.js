import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class About extends Component {
  render() {
    return (
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel posuere nulla. Fusce lobortis, purus quis laoreet luctus, enim libero feugiat elit, in feugiat neque leo non ipsum. Ut et aliquam purus, sit amet condimentum leo. Sed nec nunc orci. 
        Nulla metus lectus, maximus posuere pretium ac, placerat et nulla.</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
