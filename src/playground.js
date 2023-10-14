require("./db/mongoose");
const User = require("./models/user");

User.findByIdAndUpdate("65009c2dabf32ab0171fc96a", { age: 23 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 23 });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
