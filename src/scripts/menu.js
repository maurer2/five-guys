export default (entries) => {
  const entriesMarkup = entries.map(entry => `
    <option value="${entry.id}">${entry.fullName}</option>
  `);

  return `
    <option value="" selected disabled>Select a player...</option>
    ${entriesMarkup.join('')}
  `
};
