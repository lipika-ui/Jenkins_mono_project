import { Component, Input, Output, EventEmitter, NgZone } from '@angular/core';

@Component({
  selector: 'storybook-typography',
  template: `<article class="template-fluid"
    [ngStyle]="{ 'text-align': textAlignment, 'background-color': bgcolor }"
  >
    <section *ngIf="isbody">
      <div
        [ngClass]="{
          'dark-theme': bgcolor === 'black',
          'light-theme': bgcolor === 'white',
          'primary-color': colorVariant === 'primary',
          'success-color': colorVariant === 'success',
          'info-color': colorVariant === 'info',
          'warning-color': colorVariant === 'warning',
          'disabled-color': colorVariant === 'disabled',
          'error-color': colorVariant === 'error'
        }"
      >
        <h1 class="b1">B1 Body</h1>
        <h2 class="b2">B2 Body</h2>
        <h3 class="b3">B3 Body</h3>
        <h4 class="b4">B4 Body</h4>
      </div>
    </section>
    <section *ngIf="isheading">
      <div
        [ngClass]="{
          'dark-theme': bgcolor === 'black',
          'light-theme': bgcolor === 'white',
          'primary-color': colorVariant === 'primary',
          'success-color': colorVariant === 'success',
          'info-color': colorVariant === 'info',
          'warning-color': colorVariant === 'warning',
          'disabled-color': colorVariant === 'disabled',
          'error-color': colorVariant === 'error'
        }"
      >
        <h1 class="h1">H1 Ultra Large</h1>
        <h2 class="h2">H2 Extra Large</h2>
        <h3 class="h3">H3 Large</h3>
        <h4 class="h4">H4 Medium</h4>
        <h5 class="h5">H5 Regular</h5>
        <h6 class="h6">H6 Small</h6>
      </div>
    </section>
    <section *ngIf="issubline">
      <div
        [ngClass]="{
          'dark-theme': bgcolor === 'black',
          'light-theme': bgcolor === 'white',
          'primary-color': colorVariant === 'primary',
          'success-color': colorVariant === 'success',
          'info-color': colorVariant === 'info',
          'warning-color': colorVariant === 'warning',
          'disabled-color': colorVariant === 'disabled',
          'error-color': colorVariant === 'error'
        }"
      >
        <h1 class="s1">S1 SUBLINE</h1>
        <h2 class="s2">S2 SUBLINE</h2>
        <h3 class="s3">S3 SUBLINE</h3>
        <h4 class="s4">S4 Subline</h4>
      </div>
    </section>
    <section *ngIf="istextcombinations">
      <p
        class="storybook-title"
        [ngClass]="{
          'storybook-title-large': textcombo === 'large',
          'storybook-title-medium': textcombo === 'medium',
          'storybook-title-small': textcombo === 'small',
          'storybook-title-regular': textcombo === 'regular',
          'dark-theme': bgcolor === 'black',
          'light-theme': bgcolor === 'white'
        }"
      >
        Meet the small wild cats of Bhutan
      </p>
      <p
        class="storybook-body"
        [ngClass]="{
          'storybook-body-large': textcombo === 'large',
          'storybook-body-medium': textcombo === 'medium',
          'storybook-body-small': textcombo === 'small',
          'storybook-body-regular': textcombo === 'regular',
          'dark-theme': bgcolor === 'black',
          'light-theme': bgcolor === 'white'
        }"
      >
        Did you know that Bhutan is a hotspot of wild cat diversity? It is home
        to 11 species of wild cats which is about 30% of all wild cat species
        found in the world. Considering that Bhutan only covers .03% of the
        earth’s surface, that number seems even more amazing.
      </p>
    </section>
  </article>`,
  styleUrls: ['./typography.scss'],
})
export default class typographyComponent {
  textAlignment: 'left';
  bgcolor: 'red';
  isbody: boolean = false;
  isheading: boolean = false;
  issubline: boolean = false;
}
