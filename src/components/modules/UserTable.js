import React from 'react';
import PageTitleBar from '../PageTitleBar';
import userData from '../../data/users';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

const UserTable = React.createClass({
    render: function () {
        return (
            <div >
                <PageTitleBar title="用户表格" />
                <Table data={userData.data}  height={500} >
                    <Column width={40} sort fixed resizable>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"></Cell>
                    </Column>

                    <Column width={140} sort fixed resizable>
                        <HeaderCell>姓名</HeaderCell>
                        <Cell dataKey="name"></Cell>
                    </Column>

                    <Column width={200} sort resizable>
                        <HeaderCell>邮箱</HeaderCell>
                        <Cell dataKey="email"></Cell>
                    </Column>

                    <Column width={90} sort resizable>
                        <HeaderCell>年龄</HeaderCell>
                        <Cell dataKey="age"></Cell>
                    </Column>

                    <Column width={90} sort resizable>
                        <HeaderCell>性别</HeaderCell>
                        <Cell dataKey="gender"></Cell>
                    </Column>

                    <Column width={90} sort resizable>
                        <HeaderCell>职业</HeaderCell>
                        <Cell dataKey="job"></Cell>
                    </Column>

                    <Column width={120} sort resizable>
                        <HeaderCell>IP</HeaderCell>
                        <Cell dataKey="ip"></Cell>
                    </Column>

                    <Column width={120} sort resizable>
                        <HeaderCell>地区</HeaderCell>
                        <Cell dataKey="region"></Cell>
                    </Column>

                    <Column width={120} sort resizable>
                        <HeaderCell>城市</HeaderCell>
                        <Cell dataKey="city"></Cell>
                    </Column>

                    <Column width={220} sort resizable>
                        <HeaderCell>创建时间</HeaderCell>
                        <Cell dataKey="createTime"></Cell>
                    </Column>

                </Table>
            </div>
        );
    }
});

export default UserTable;
