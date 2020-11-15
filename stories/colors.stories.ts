import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import colorsComponent from "./colors.component";
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule, MatGridTile, MatGridList} from '@angular/material/grid-list';

const alignOptions = {
  left: 'left',
  right: 'right',
  center: 'center',
};

const colorOptions = {
    white: 'white',
    black: 'black'
};
  const category = {
    primary: 'primary',
    secondary: 'secondary',
    teritary: 'teritary',
    neutral: 'neutral'
};

export default {
  title: 'Colors',
  controls: { expanded: true },
  argTypes: {
    bgcolor: { control: 'color' },
  },
  decorators: [withKnobs],
}

export const primary = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList]
  },  
  component: colorsComponent,
  props: {
    textAlignment: select("Alignment", alignOptions, "left", "GROUP-ID1"),
    bgcolor: select('Color', colorOptions, 'white', 'Background'),
    btnCategory: select("btnCategory", category, "primary", "GROUP-ID3"),

  },
});
primary.story = {}

export const secondary = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList]
  },  
  component: colorsComponent,
  props: {
    textAlignment: select("Alignment", alignOptions, "left", "GROUP-ID1"),
    bgcolor: select('Color', colorOptions, 'white', 'Background'),
    btnCategory: select("btnCategory", category, "secondary", "GROUP-ID3"),
  },
});
secondary.story = {
}

export const neutral = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList]
  },  
  component: colorsComponent,
  props: {
    textAlignment: select("Alignment", alignOptions, "left", "GROUP-ID1"),
    bgcolor: select('Color', colorOptions, 'white', 'Background'),
    btnCategory: select("btnCategory", category, "neutral", "GROUP-ID3"),
  },
});
neutral.story = {
}

export const support = () => ({
  moduleMetaData: {
    imports: [MatButtonModule, MatGridListModule, MatGridTile, MatGridList]
  },  
  component: colorsComponent,
  props: {
    textAlignment: select("Alignment", alignOptions, "left", "GROUP-ID1"),
    bgcolor: select('Color', colorOptions, 'white', 'Background'),
    btnCategory: select("btnCategory", category, "teritary", "GROUP-ID3"),
  },
});
support.story = {
}
