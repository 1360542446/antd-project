import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

interface state {
    columns: object[];
    rowKey: string;
    dataSource: object[];
    [key: string]: any;
}

export default class StudentList extends Component<any, state, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [{
                title: 'Student_id',
                dataIndex: 'student_id'
            }, {
                title: 'Name',
                dataIndex: 'name',
                render: (text: string) => { return <a>{text}</a> }
            }, {
                title: 'Grade',
                dataIndex: 'grade',
            }, {
                title: 'Avgpoint',
                dataIndex: 'avgpoint',
            }],
            rowKey: 'student_id',
            dataSource: [{
                student_id: '1',
                name: 'John Brown',
                grade: '32',
                avgpoint: 1,
            }, {
                student_id: '2',
                name: 'Jim Green',
                grade: '42',
                avgpoint: 2,
            }, {
                student_id: '3',
                name: 'Joe Black',
                grade: null,
                avgpoint: 3,
            }, {
                student_id: '4',
                name: 'Disabled User',
                grade: null,
                avgpoint: 4,
            }],
            navTo: {
                is: false,
                path: ''
            }
        };
    }

    navTo = {
        is: false,
        path: '/studentInfo'
    }

    onRowClick(event: any) {
        // const studentID: string = event.currentTarget.firstElementChild.textContent;
        this.navTo = {
            is: true,
            path: '/studentInfo'
        }
        this.forceUpdate();
    }

    render() {
        if (this.navTo.is) {
            console.log(1,this.navTo.is)
            this.navTo.is = false;
            return (
                <Redirect to={this.navTo.path} />
            )
        } else {
            console.log(2, this.navTo.is)
            return <Table {...this.state} onRow={(record: any) => { return { onClick: this.onRowClick.bind(this) } }}></Table>
        }
    }
}