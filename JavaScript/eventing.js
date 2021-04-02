/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function addEventing(obj) {
  obj.events = {};
  obj.on = (...args) => {
    obj.events[args[0]] = args.slice(1);
  };
  obj.trigger = (...args) => {
    if (obj.events[args[0]]) {
      obj.events[args[0]].forEach((func) => func.apply(obj, args.slice(1)));
    }
  };

  // without arrow functions handling 'this' context for us.
  // obj.events = {};
  // obj.on = function () {
  //   const args = Array.prototype.slice.call(arguments);
  //   this.events[args[0]] = args.slice(1).map((func) => func);
  // };

  // obj.trigger = function () {
  //   const args = Array.prototype.slice.call(arguments);
  //   const event = args[0];
  //   const triggerArgs = args.slice(1);

  //   if (!this.events[event]) return;

  //   const funcs = this.events[event];
  //   for (let i = 0; i < funcs.length; i += 1) {
  //     funcs[i].apply(this, triggerArgs);
  //   }
  // };

  return obj;
}

(function () {
  const alice = { name: 'Alice', age: 30 };
  const person = addEventing(alice);
  person.on('changeAge', (years) => { person.age += years || 1; });
  person.on('getAge', () => { console.log(person.age); });

  person.trigger('getAge');
  person.trigger('changeAge', 2);
  person.trigger('getAge');
  // console.log(person); notice how events is appended to person
  console.log(person.events);

  // const alice = { name: 'Alice', age: 30 };
  // const person = mixEvents(alice);
  // person.on('changeAge', function (years) {
  //   this.age += years || 1;
  // });
  // person.on('getAge', function () {
  //   console.log(this.age);
  // });
  // person.trigger('getAge');
  // person.trigger('changeAge', 2);
  // person.trigger('getAge');
  // person.trigger('changeAge');
  // person.trigger('changeAge');
  // person.trigger('getAge');
}());
