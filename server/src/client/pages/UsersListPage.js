import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUser() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title> {`${this.props.users.length} User Loaded`}</title>
        <meta property='og:title' content='user App' />
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUser()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const loadData = Store => Store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage)
};
