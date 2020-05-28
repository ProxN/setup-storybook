import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('red', () => (
    <Button color={select('color', { Red: 'red', Dark: 'darkred' }, 'red')} />
  ))
  .add('blue', () => <Button color={text('color', 'blue')} />);
