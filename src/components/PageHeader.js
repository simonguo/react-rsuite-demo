import React from 'react';
import { Header, Navbar } from 'rsuite';

const PageHeader = React.createClass({
    render() {

        return (
            <Header inverse >
                <div className="page-container">
                    <Navbar.Header>
                        <Navbar.Brand className="logo">
                            演示项目
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </div>
            </Header>
        );
    }
});

export default PageHeader;
