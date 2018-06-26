// @flow
import * as React from 'react';
import type {CharacterProps} from 'Components/Character/types';

const Character = ({eye_color, gender, height, name}: CharacterProps): React.Element<'div'> => (
    <div>
        <h1>{name}</h1>
        <h3>{height}</h3>
        <h3>{gender}</h3>
        <h3>{eye_color}</h3>
    </div>
);

export default Character;
