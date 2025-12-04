class PubSub {
  constructor() {
    this.subscribers = [];
  }
  sub(fn) {
    this.subscribers.push(fn);
  }
  pub(data) {
    this.subscribers.forEach((fn) => fn(data));
  }
}

const pubsub = new PubSub();

// pubsub.sub((data) => console.log(`Subscriber 1 received: ${data}`));
// pubsub.pub("Hello, World!");

class PubSub2 {
  constructor() {
    this.subscribers = new Map();
  }
  sub(eventName, fn) {
    const currentSub = this.subscribers.get(eventName) || [];
    currentSub.push(fn);
    this.subscribers.set(eventName, currentSub);
  }
  pub(eventName, data) {
    const currentSub = this.subscribers.get(eventName) || [];

    currentSub.forEach((fn) => fn(data));
  }
}

const pubsub2 = new PubSub2();

pubsub2.sub("click", (data) => console.log(`pubsub2: ${data}`));
pubsub2.pub("click", "ata");
