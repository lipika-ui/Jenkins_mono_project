/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import typographyComponent from './typography.component';

const alignOptions = {
  left: 'left',
  right: 'right',
  center: 'center',
};
const colorOptions = {
  white: 'white',
  black: 'black',
};

const colorVariants = {
  default: 'default',
  primary: 'primary',
  success: 'success',
  info: 'info',
  disabled: 'disabled',
  error: 'error'
}

const textComboOptions = {
  large: 'large',
  medium: 'medium',
  small: 'small',
  regular: 'regular',
};

export default {
  title: 'Typography',
  controls: { expanded: true },
  argTypes: {
    bgcolor: { control: 'color' },
  },
  decorators: [withKnobs],
};

export const heading = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    bgcolor: select('Mode', colorOptions, '#ffff', 'Background'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    isheading: true,
  },
});
heading.story = {};

export const body = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    isbody: true,
  },
});
body.story = {};

export const subline = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
    colorVariant: select('Color', colorVariants, 'default', 'Colors'),
    issubline: true,
  },
});
subline.story = {};

export const textcombinations = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: typographyComponent,
  props: {
    textAlignment: select('Alignment', alignOptions, 'left', 'Alignment'),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
    textcombo: select(
      'TextCombo',
      textComboOptions,
      'large',
      'Text Combinations'
    ),
    istextcombinations: true,
  },
});
textcombinations.story = {};
