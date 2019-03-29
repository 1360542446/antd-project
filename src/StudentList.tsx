import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { Redirect, BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom';

interface state {
    columns: object[];
    dataSource: object[];
    [key: string]: any;
}

class StudentList extends Component<any, state, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [{
                title: 'Student_id',
                dataIndex: 'student_id'
            }, {
                title: 'Name',
                dataIndex: 'name'
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
            }]
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/AvgscoreServlet.json').then(response => response.json()).then(data => {
            const items: object[] = data['items'];
            if (items.length <= 0) return;
            const columns = Object.keys(items[0]).map(key => {
                return {
                    title: key.replace(/^\w/, m => m.toUpperCase()),
                    dataIndex: key
                }
            });

            this.setState({
                columns,
                dataSource: items
            })
        })
    }

    onRowClick(event: any) {
        const studentID: string = event.currentTarget.firstElementChild.textContent;
        this.props.history.push('/studentInfo/' + studentID);
    }

    render() {
        return <Table {...this.state} onRow={(record: any) => { return { onClick: this.onRowClick.bind(this) } }}></Table>
    }
}

export default withRouter(StudentList);