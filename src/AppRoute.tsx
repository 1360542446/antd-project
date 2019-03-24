import React, { Component } from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentInfo from './StudentInfo';
import StudentList from './StudentList';
import Error from './Error';
// export default
const AppRoute = () => (
    <Switch>
        <Route path="/" exact component={StudentList}></Route>
        <Route path="/studentInfo/:student_id?" component={StudentInfo}></Route>
        <Route component={Error}></Route>
    </Switch>
)

export default AppRoute;