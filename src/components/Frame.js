import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import { on, getHeight, addClass, removeClass } from 'dom-lib';

import PageHeader from '../components/PageHeader';
import PageSidebar from '../components/PageSidebar';
import PageFooter from '../components/PageFooter';
import debounce from '../utils/debounce';

const Frame = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    fixedFooter() {

        let footer = findDOMNode(this.refs.footer);
        //context 高度 < window 高度 - header 高度
        if (getHeight(findDOMNode(this.refs.content)) < getHeight(global) - 50) {
            addClass(footer, 'fixed');
            return;
        }
        removeClass(footer, 'fixed');

    },
    handleWindowResize() {
        this.fixedFooter();
    },
    componentDidMount() {
        this._onWindowResizeListener = on(window, 'resize', debounce(this.handleWindowResize, 50));
        this.fixedFooter();
    },
    componentWillUnmount() {
        if (this._onWindowResizeListener) {
            this._onWindowResizeListener.off();
        }
    },
    componentWillUpdate() {
        this.fixedFooter();
    },
   
    render: function () {

        const { activeItem, children, hideSidebar } = this.props;
        const styles = {
            marginLeft: hideSidebar ? 0 : 200
        };
        return (
            <div>
                <PageHeader activeItem={activeItem} />
                <div className='page-container page-content' ref='content'>
                    <PageSidebar />
                    <div className='page-content-wrapper' style={styles}>
                        {children}
                        <PageFooter ref='footer' />
                    </div>
                </div>
            </div>
        );
    }
});

export default Frame;
