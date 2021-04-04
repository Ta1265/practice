/*
  create a promise from scratch
*/

// writing promis class from scratch
// attributes -  then chain

// promise constructor takes a function (resolve, reject)
// resolve function - takes the results passes them to the first function in the then chain
// reject function - takes an error and passes
// it to passes it to the .catch functions arg func as a param

// .then - takes a function adds it to thenChain to complete
// .catch - takes a function that takes an error from the params

class myPromise {
  constructor(func) {
    this.thenChain = [];
    this.handleErrorFunc = () => { }; // defined with .catch
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    // execute the given function passing it our local resolve, reject funcs as params
    func(this.onResolve, this.onReject);
  }

  then(succesFunc) {
    this.thenChain.push(succesFunc);
    return this; // maintain left of . context into the next .then or .catch
  }

  catch(handleErrorFunc) {
    this.handleErrorFunc = handleErrorFunc;
  }

  onResolve(value) {
    let storedValue = value;
    try {
      this.promiseChain.forEach((func) => {
        storedValue = func(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleErrorFunc(error);
  }
}

function getTemperature() {
  return new myPromise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (1000 - 1000 + 1) + 1000);
    const temp = Math.floor(Math.random() * (300 - 1 + 1) + 1);
    console.log(delay, temp);
    setTimeout(() => {
      if (temp > 200) reject(new Error(`Too Hot | Delay: ${delay}  | Temperature: ${temp} deg`));
      else if (temp < 100) reject(new Error(`Too Cold | Delay: ${delay} | Temperature: ${temp} deg`));
      else resolve(`Just right | Delay ${delay} | Temperature ${temp} deg`);
    }, delay);
  });
}

getTemperature()
  .then((msg) => console.log(msg))
  .catch((err) => console.log('error', err.message));
