import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import AppRoute from './AppRoute';
import './App.less';
interface state {
  navTo: any;
}
class App extends Component<any, state>{
  constructor(props: any) {
    super(props);
  }

  

  render() {
    return (
      <BrowserRouter>
        <AppRoute></AppRoute>
      </BrowserRouter>
    );
  }
}

export default App;