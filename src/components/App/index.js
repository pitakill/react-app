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
    state = {
        data: [],
    };

    fetchData = async (): Promise<fetch> => {
        try {
            const responseRaw = await fetch('https://swapi.co/api/people');
            const {results: data} = await responseRaw.json();
            this.setState({data});
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount(): void {
        this.fetchData();
        this.props.actions.getData({hola:"mundo"});
    }

    render(): React.Element<typeof React.Fragment> {
        console.log(this.props.data);
        return (
            <React.Fragment>
            {
                this.state.data.map((element, index) => (
                    <Character
                        key={index}
                        {...element}
                    />
                ))
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
