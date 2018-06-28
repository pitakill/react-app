// @flow

import * as React from 'react';
import type {
    AppProps,
    AppState,
} from 'Components/App/types';
import Character from 'Components/Character';

// Redux
import * as actions from '@/actions';
import store from '@/store';
import {connect, Provider} from 'react-redux';
import {bindActionCreators} from 'redux';

class AppNotConected extends React.Component<AppProps, AppState> {
    componentDidMount(): void {
        this.props.actions.getData();
    }

    render(): React.Element<typeof React.Fragment> {
        return (
            <React.Fragment>
            {
                this.props.info && this.props.info.data
                ? this.props.info.data.map((element, index) => (
                    <Character
                        key={index}
                        {...element}
                    />
                ))
                : null
            }
            </React.Fragment>
        );
    }
}


// Redux
const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch)=> ({
  actions: bindActionCreators(actions, dispatch)
});

const AppConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNotConected);

const App = () => (
    <Provider store={store}>
        <AppConnected />
    </Provider>
);

export default App;
