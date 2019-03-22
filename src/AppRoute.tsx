import React, { Component } from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentInfo from './StudentInfo';
import StudentList from './StudentList';
// export default
const AppRoute = () => (
    <Switch>
        <Route path="/" component={StudentList}></Route>
        <Route path="studentInfo" component={StudentInfo}></Route>
    </Switch>
)

export default AppRoute;