export const setLocalCards = (cards) => {
  localStorage.setItem('CARD', JSON.stringify(cards));
}

export const getLocalCards = () => JSON.parse(localStorage.getItem('CARD'));

export const removeLocalCards = () => {
  localStorage.removeItem('CARD')
}