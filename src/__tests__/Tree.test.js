import React from 'react';
import {render,fireEvent} from '@testing-library/react'

import Tree from '../components/Tree';

describe('Tree',()=>{
    test('render tree component',()=>{
        const {getByText} = render(<Tree/>);

        const parent = getByText('Parent')

        expect(parent).toBeInTheDocument();

        fireEvent.click(parent);

        const child = getByText('Child - 1');

        expect(child).toBeInTheDocument();
    })
})
