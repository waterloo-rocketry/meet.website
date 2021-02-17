function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const queryList = query.split('&');
  let value = undefined;

  queryList.forEach(pair => {
    const pairVals = pair.split('=');
    if (decodeURIComponent(pairVals[0]) === variable) {
      value = decodeURIComponent(pairVals[1]);
    }
  });

  return value;
  }
