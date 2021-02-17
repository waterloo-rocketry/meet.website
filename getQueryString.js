function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const queryList = query.split('&');
    let name = undefined;

    queryList.forEach(pair => {
      const pairVals = pair.split('=');
      if (decodeURIComponent(pairVals[0]) == variable) {
        name = decodeURIComponent(pairVals[1]);
      }
    });

    return name;
  }