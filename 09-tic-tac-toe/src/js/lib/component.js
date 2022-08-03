// We're importing the store Class here so we can test against it in the constructor
import Store from "../store/store.js";

export default function Component(props = {}) {
  // If there's a store passed in, subscribe to the state change
  if (props.store instanceof Store) {
    props.store.events.subscribe("stateChange", () => this.render());
  }

  // Store the HTML element to attach the render to if set
  if (props.hasOwnProperty("element")) {
    this.element = props.element;
  }
}

Component.prototype.render = function () {
  console.log("tf!");
};
