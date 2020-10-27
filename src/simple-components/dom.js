export default (text = 'Hello nyan!') => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
};