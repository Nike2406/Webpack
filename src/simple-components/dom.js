export default (text = 'Hello webpack!!!') => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
};