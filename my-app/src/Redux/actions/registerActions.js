// Action creator function
function registerAction(key) {
    return {
      type: 'REGISTER',
      key: key
    };
  }
  
  // Usage in your component or middleware
  const key = 'someKey';
  _pStore.dispatch(registerAction(key));
  