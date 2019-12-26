import React, { Component, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch, connect } from 'react-redux';
import { incrementCounterAction, decrementCounterAction } from './actions/counter';
import { getUserInfo, updateUserInfo } from './actions/userInfo';

function App() {

  const { counter, user } = useSelector(state => ({
    counter: state.counter,
    user: state.user
  }), shallowEqual);
  const dispatch = useDispatch();

  // render() {

    // const { counter, isLogged } = this.props;
  
    useEffect(() => {
      //document.title = `You clicked ${counter} times`;
    });

    const initialValue = {
      isLoggedIn: true,
      firstName: 'Victor',
      lastName: 'Ejiogu',
      email: 'user@email.com'
    };

    return(
      
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(incrementCounterAction())}>+1</button>
        <button onClick={() => dispatch(incrementCounterAction(10))}>+10</button> -
        <button onClick={() => dispatch(decrementCounterAction())}>-1</button>
        <button onClick={() => dispatch(decrementCounterAction(10))}>-10</button>
        <hr />
        { user.isLoggedIn ? <h3>Protected section</h3> : ''}
        <h1>User Info <button onClick={() => dispatch(updateUserInfo(initialValue))}>Update</button></h1>
        FirstName: {user.firstName ? user.firstName : 'null'}<br />
        lastName: {user.lastName ? user.lastName : 'null'}<br />
        isLoggedIn: {user.isLoggedIn ? 'true' : 'false'}<br />
        Email: {user.email ? user.email : 'null'}<br />
      </div>
    );

    // return(
      
    //   <div className="App">
    //     <h1>Counter {counter}</h1>
    //     <button onClick={() => this.props.incrementCounterAction()}>+1</button>
    //     <button onClick={() => this.props.incrementCounterAction(10)}>+10</button> -
    //     <button onClick={() => this.props.decrementCounterAction()}>-1</button>
    //     <button onClick={() => this.props.decrementCounterAction(10)}>-10</button>
    //     { isLogged ? <h3>Protected section</h3> : ''}
    //   </div>
    // );
  // }
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//     isLogged: state.isLogged
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounterAction: (data) => dispatch(incrementCounterAction(data)),
//     decrementCounterAction: (data) => dispatch(decrementCounterAction(data))
//   };
// };

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
