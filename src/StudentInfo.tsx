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
        const dataSource: Array<any> = [{
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
                title: 'Title',
                dataIndex: 'title',
            }, {
                title: 'Point',
                dataIndex: 'point',
            }],
            dataSource: dataSource.filter((val: any) => val['student_id'] === this.props.match.params['student_id'])
        };
    }

    componentDidMount() {
        // console.log(this.props.match.params.student_id);
        const { student_id } = this.props.match.params;
        fetch('http://localhost:8080/DiscretemathSys/DetailscoreServlet?studentid=' + student_id).then(response => response.json()).then(data => {
            const items: object[] = data['items'];
            if (items.length <= 0) return;
            const columns = Object.keys(items[0]).map(key => {
                return {
                    title: key.replace(/^\w/, m => m.toUpperCase()),
                    dataIndex: key
                }
            });

            this.setState({
                dataSource: items
            })
        })
    }

    renderBasicInfo() {
        const dataSource: any = this.state.dataSource;
        if (dataSource.length > 0) {
            return (
                <div>
                    <h2>student_id: {dataSource[0]['student_id']}</h2> <h2>name: {dataSource[0]['name']}</h2> <h2>grade: {dataSource[0]['grade']}</h2>
                </div>
            )
        }
        return (
            null
        )
    }

    render() {

        return (<div>
            {this.renderBasicInfo()}
            < Table {...this.state} ></Table >
        </div>)
    }
}