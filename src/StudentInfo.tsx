import React, { Component } from 'react';
import { Button, Table } from 'antd';

interface state {
    columns: object[];
    dataSource: object[];
    [key: string]: any;
}

export default class StudentInfo extends Component<any, state> {
    constructor(props: any) {
        super(props);
        const dataSource = [{
            student_id: '1',
            name: 'John Brown',
            grade: '32',
            title: '03-07的作业',
            point: 1,
        }, {
            student_id: '2',
            name: 'Jim Green',
            grade: '42',
            title: '03-07的作业',
            point: 1,
        }, {
            student_id: '3',
            name: 'Joe Black',
            grade: null,
            title: '03-07的作业',
            point: 1,
        }, {
            student_id: '4',
            name: 'Disabled User',
            grade: null,
            title: '03-07的作业',
            point: 1,
        }];
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
                title: 'Title',
                dataIndex: 'title',
            }, {
                title: 'Point',
                dataIndex: 'point',
            }],
            rowKey: 'student_id',
            dataSource: dataSource.filter((val: any) => val['student_id'] === this.props.match.params['student_id'])
        };
    }

    render() {
        return <Table {...this.state}></Table>
    }
}