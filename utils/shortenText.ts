export const shortenText = (text: string, startLength = 5, endLength = 5) => {
  if (text.length <= startLength + endLength) {
    return text;
  }

  return (
    text.substring(0, startLength) +
    '...' +
    text.substring(text.length - endLength)
  );
};
