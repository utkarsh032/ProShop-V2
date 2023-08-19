import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: "bcrypt.hashSync('123456',10)",
    isAdmin: true,
  },

  {
    name: "Utkarsh Raj",
    email: "utkarsh@email.com",
    password: "bcrypt.hashSync('123456',10)",
    isAdmin: true,
  },
  {
    name: "Jal Raj",
    email: "jal@email.com",
    password: "bcrypt.hashSync('123456',10)",
  },
];

export default users;
