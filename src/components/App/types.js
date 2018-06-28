// @flow
import type {Character} from '@/types';

export type AppProps = {
    actions: {
        getData: Function,
    },
    info: {
        data?: Array<Character>,
    }
};
export type AppState = {};
