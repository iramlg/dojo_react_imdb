import React from 'react';
import { render } from 'react-dom';
import { ContainerLogic } from './components/container_logic.jsx';

render(
    (
        <div>
            <h1>React Native Dojo - IMDB</h1>
            <ContainerLogic name='Sampinha' />
        </div>
    ), document.getElementById('reactDiv')
)
