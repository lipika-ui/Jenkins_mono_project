// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {  Meta } from '@storybook/angular/types-6-0';
import Buttons from './buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';

const colorOptions = {
  white: 'white',
  black: 'black',
};

export default {
  title: 'Buttons',
  component: Buttons,
  decorators: [withKnobs],
  moduleMetaData: {
    imports: [MatButtonModule]
  }
} as Meta;

export const primaryLarge = () => ({
  moduleMetadata: {
    imports: [MatButtonModule]
  },
  component: Buttons,
  props: {
    text: text('text', "Main CTA"),
    extraClass: text('extraClass', 'btn-large'),
    isdisabled: boolean("isdisabled", false),
    secondary: boolean('secondary', false),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
  },
});
primaryLarge.story = {}

export const primarySmall = () => ({
  moduleMetadata: {
    imports: [MatButtonModule]
  },
  component: Buttons,
  props: {
    text: text('text', "Small CTA"),
    extraClass: text('extraClass', 'btn-small'),
    isdisabled: boolean("isdisabled", false),
    secondary: boolean('secondary', false)
  },
});
primarySmall.story = {}

export const primaryLargeIcon = () => ({
  moduleMetadata: {
    imports: [MatButtonModule]
  },
  component: Buttons,

  props: {
    text: text('text', "Main CTA"),
    extraClass: text('extraClass', 'btn-large'),
    isdisabled: boolean("isdisabled", false),
    secondary: boolean('secondary', false),
    textright: boolean("textright", false),
    icon: boolean("icon", false),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
    withicon: true
  },
})
primaryLargeIcon.story = {}

export const primarySmallIcon = () => ({
  moduleMetadata: {
    imports: [MatButtonModule]
  },
  component: Buttons,

  props: {
    text: text('text', "Small CTA"),
    extraClass: text('extraClass', 'btn-small'),
    isdisabled: boolean("isdisabled", false),
    secondary: boolean('secondary', false),
    textright: boolean("textright", false),
    icon: boolean("icon", false),
    bgcolor: select('Color', colorOptions, '#ffff', 'Background'),
    withicon: true
  },
})
primarySmallIcon.story = {}


