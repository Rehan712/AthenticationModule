import React from 'react';
import { connect } from 'react-redux';
import { func, shape, arrayOf, string, bool, any } from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import * as actions from '../actions';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/Home';
import Form from './Form';
import Students from './Students';
import { isTokenValid } from '../utils';

export class App extends React.Component {
  static propTypes = {
    fetchData: func.isRequired,
    data: arrayOf(any).isRequired,
    isLoading: bool.isRequired,
    error: shape({
      message: string
    })
  };

  static defaultProps = {
    error: null
  };

  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    // const { fetchData } = this.props;
    // fetchData();
    const token = localStorage.getItem('token');
    console.log('token', token);

    if (isTokenValid()) {
      console.log('token');
      this.setState({ isAuthenticated: true });
    } else {
      this.props.history.push('/form');
    }
  }

  render() {
    console.log('props in app are', this.props);
    const { data, isLoading, error, fetchData } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <div className="app">
        <Link style={{ margin: '20px' }} to="/dashboard">
          Go to Dashboard
        </Link>
        {isAuthenticated && (
          <Link style={{ margin: 20 }} to="/students">
            Students
          </Link>
        )}

        {isAuthenticated && <Link to="/dashboard/profile">Go to Profile</Link>}
        <Link to="/form">Go to Form</Link>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/form" component={Form} />
          <Route
            path="/students"
            render={routeProps => {
              return <Students data={data} getData={fetchData} error={error} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data: data.data,
    isLoading: data.isLoading,
    error: data.error
  };
}

export default withRouter(
  connect(mapStateToProps, { fetchData: actions.fetchData })(App)
);
