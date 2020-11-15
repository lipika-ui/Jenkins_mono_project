import { Component } from '@angular/core';

@Component({
  selector: 'storybook-buttons',
  template: `<div class="template-fluid">
    <button
      *ngIf="!withicon"
      mat-raised-button
      [disabled]="isdisabled"
      [ngClass]="[
        extraClass ? extraClass : ' ',
        secondary ? 'storybook-button--secondary' : 'storybook-button--primary'
      ]"
    >
      {{ text }}
    </button>
    <button
      *ngIf="withicon"
      mat-raised-button
      [disabled]="isdisabled"
      [ngClass]="[
        extraClass ? extraClass : ' ',
        secondary ? 'storybook-button--secondary' : 'storybook-button--primary'
      ]"
    >
      <span *ngIf="!textright && !icon"> {{ text }} </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.6552 1L1 9.09839H10.1954C10.3985 9.09839 10.5632 9.26307 10.5632 9.46621V18.6552L18.6552 1Z"
          stroke="white"
          stroke-width="1.47126"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span *ngIf="textright && !icon"> {{ text }} </span>
    </button>
  </div> `,
  styleUrls: ['./buttons.scss'],
})
export default class ButtonsComponent {
  extraClass = '';
  text = '';
  isdisabled = false;
  secondary = false;
  bgcolor = "white";
}
