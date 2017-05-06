import React from 'react';

import Frame from './Frame';
const App = React.createClass({
    render() {
        const { children } = this.props;
        return (
            <Frame>
                <div className="page-content">
                    {children}
                </div>
            </Frame>
        );
    }
});

export default App;
