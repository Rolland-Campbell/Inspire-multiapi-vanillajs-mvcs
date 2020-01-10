
let _state = {
  nasaApod: {},
  scienceNews: [],
  weather: {},
  unsplash: {}
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  nasaApod: [],
  scienceNews: [],
  weather: [],
  unsplash: []
};


//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in the state
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state[prop]) {
    throw new Error(`${prop} is not defined on the state`);
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach(fn => fn());
  }
}

const store = new Store();
export default store;
