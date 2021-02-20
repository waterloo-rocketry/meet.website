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

function prettify(line) {
    // separate underscore-delineated words
    const words = line.split('_').map(word => {
        // place spaces between letters and digits
        word = word.replace(/([a-zA-Z])(\d)/g, '$1 $2');
        word = word.replace(/(\d)([a-zA-Z])/g, '$1 $2');
        // capitalize first letter
        return word[0].toUpperCase() + word.substring(1);
    })

    console.log(words.join(' '));
    return words.join(' ');
}
