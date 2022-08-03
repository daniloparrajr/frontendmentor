/**********
 *
 * pubsub.subscribe() on() add() listen()
 * pubsub.unsubscribe() off() remove() unlisten()
 * pubsub.publish() emit() announce()
 *
 * */

export default function PubSub() {
  this.events = {};
}

PubSub.prototype.subscribe = function (evName, fn) {
  // console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
  //add an event with a name as new or to existing list
  this.events[evName] = this.events[evName] || [];
  this.events[evName].push(fn);
};

PubSub.prototype.publish = function (evName, data) {
  // console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
  //emit|publish|announce the event to anyone who is subscribed
  if (this.events[evName]) {
    this.events[evName].forEach((f) => {
      f(data);
    });
  }
};
