module.exports = {
  getSalutation: () => {
    console.log(`Req Zone: ${Zone.current.name}`);
    return `Hello, Req ${Zone.current.name}!`;
  }
};
