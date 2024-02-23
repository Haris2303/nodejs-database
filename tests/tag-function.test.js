function tagFunction(array, ...args) {
  console.info("Array: ", array);
  console.info("Arguments: ", args);
}

test("Tag Function", () => {
  const name = "Otong";
  const lastName = "Surotong";

  tagFunction`Hello ${name} ${lastName}!, How are you?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test("Tag function SQL", () => {
  const name = "Asep";
  const age = 900;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
