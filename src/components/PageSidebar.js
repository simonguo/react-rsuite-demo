import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { toggleClass } from 'dom-lib';


const SidebarMenu = React.createClass({
    propTypes: {
        open: React.PropTypes.bool,
        menuItems: React.PropTypes.array,
    },
    getDefaultProps() {
        return {
            open: true,
            menuItems: [
                {
                    'title': '用户模块',
                    'icon': 'icon icon-cog',
                    'children': [
                        {
                            'title': '用户表格',
                            'link': '/user-table'
                        }, {
                            'title': '用户图表',
                            'link': '/user-chart'
                        }
                    ]
                }
            ]
        };
    },
    handleMenuHeaderClick(key) {
        toggleClass(ReactDOM.findDOMNode(this.refs[key]), 'open');
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    renderItems() {
        const { menuItems, open } = this.props;
        const className = open ? 'open' : '';
        return menuItems.map((item, index) => {
            return (
                <li
                    className={className}
                    key={index}
                    ref={item.localeKey + index}
                >
                    <a>
                        <i className={item.icon}></i>
                        <span className="title">{item.title}</span>
                    </a>
                    {this.renderSubItems(item.children)}
                </li>
            );
        });
    },
    renderSubItems(subItems = []) {

        if (!subItems.length) {
            return null;
        }
        return (
            <ul className="sub-menu">
                {
                    subItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={this.context.router.isActive(item.link) ? 'active' : null}
                            >
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    },
    render: function () {
        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar">
                    <ul className="page-sidebar-menu">
                        {this.renderItems()}
                    </ul>
                </div>
            </div>
        );
    }
});

export default SidebarMenu;
