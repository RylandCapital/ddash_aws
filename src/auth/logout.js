import React, { Component } from "react";
import setAuthToken from "../utils/setAuthToken";
import {
    SET_CURRENT_USER,
  } from "../actions/types";

class Logout extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      console.log(this.props.history)
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
onSubmit = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    console.log("logged out")
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    setCurrentUser({});
    this.props.history.push("/");
    window.location.reload()
};


render() {
return (
    
        <div style={{ marginTop: "0vh", marginLeft: '1rem'}}>
          <div>
            <form noValidate onSubmit={this.onSubmit}>
              <div>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      
    );
  }
}

const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

export default (Logout);