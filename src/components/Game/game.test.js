import React from 'react';
import fetchMock from 'fetch-mock';
import fetch from 'node-fetch'
import renderer from 'react-test-renderer';
import Game from './game';

const {Response} = jest.requireActual('node-fetch');

describe('#GAME COMPONENT ==>', () => {

    it('Game component should renders without crashing', () => {
        const component = renderer.create(<Game></Game>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('Fetch should request without crashing', () => {
        
        fetchMock.mock('*', 200)
        const rendered = renderer.create(<Game />).toJSON()
        expect(rendered).toMatchSnapshot();

    });

})


