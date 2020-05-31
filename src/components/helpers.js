// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
export default escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export default getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter((language) => regex.test(language.name));
};

export default getSuggestionValue = (suggestion) => {
  return suggestion.name;
};

export default renderSuggestion = (suggestion) => {
  return <span>{suggestion.name}</span>;
};
