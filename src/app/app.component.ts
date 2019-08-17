import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { IxCard } from 'ix-angular-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ix-angular-framework';
  cards: IxCard[];

  constructor() {
    this.cards = [
      new IxCard("image-gallery", "DIGITALIZATION", "Product photoshoot and image editing.", "link", "black", "white"),
      new IxCard("ruler-pencil", "OFFER DESIGN", "ASIN creation in Seller Central, product title description and tag enrichment.", "link", "gray", "white"),
      new IxCard("truck", "DELIVERY MANAGEMENT", "Product packaging, labelling, dropship, FBA delivery management and tracking.", "link", "lightcyan", "black"),
      new IxCard("line-chart", "ANALYTICS", "Monthly analysis and performance reports. Sales consulting and best practices online.", "link", "lightgreen", "black"),
      new IxCard("bullseye", "PROMOTIONS", "Pricing strategies. Seasonality. Discounts. Bundles.", "link", "lightcoral", "black"),
    ]
  }
  form = {
    fields: [
      {
        name: "title",
        label: "Title*",
        validators: [Validators.required, Validators.minLength(6)],
        defaultValue: '',
      },
      {
        name: "password",
        label: "Password*",
        type: "password",
        validators: [Validators.required, Validators.minLength(6)],
        defaultValue: '',
      },
      {
        name: "details",
        type: "textarea",
        label: "Details",
        validators: [],
        defaultValue: '',
      },
      {
        name: "email",
        label: "Your email*",
        validators: [Validators.required, Validators.email],
        defaultValue: '',
      },
      {
        name: "image",
        label: "Your image*",
        type: "image",
        validators: [],
        defaultValue: '',
      }
    ],

    title: "Request a feature",

    submitButtonLabel: "Submit",

    onSubmit: (fields): Promise<any> => {
      console.log(fields);
      return null;
    },

    postSubmit: (response) => {
      
    },

    onCancel: () => {
      
    }
  }
}
