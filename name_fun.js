const sayName = (names) => {
  names.map(({ name, post }) => {
    console.log(`Hello my name is ${name}.My domain ${post}`);
  });
};
module.exports = sayName;
