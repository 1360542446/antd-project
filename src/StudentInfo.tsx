import React, { Component } from 'react';
import { Button, Table } from 'antd';

interface state {
    columns: object[];
    rowKey: string;
    dataSource: object[];
    [key: string]: any;
}

export default class StudentInfo extends Component<any, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: [{}],
            rowKey: '',
            dataSource: [{}],
        }
    }

    render() {
        return <h1>asdasdas</h1>
    }
}