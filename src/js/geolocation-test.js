import { Geolocation } from '@capacitor/geolocation';

window.customElements.define(
  'geolocation-test',
  class extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
    </style>
    <p>
      <button class="button" id="geolocate">Geolocate</button>
    </p>
    `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot.querySelector('#geolocate').addEventListener('click', async function (e) {
        try {
          // get the users current position
          const position = await Geolocation.getCurrentPosition();

          // grab latitude & longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude, longitude)
        } catch (e) {
          console.warn('Geolocation failed', e);
        }
      });
    }
  }
);
