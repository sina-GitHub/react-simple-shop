import defaultImg from "../images/users.png";
import janeImg from "../images/woman1.jpg";
import jasmineImg from "../images/woman2.jpg";
import johnImg from "../images/man2.jpg";
import MikeImg from "../images/man1.jpg";
import JohnWick from "../images/JohnWick.jpg";

export let users = [
  {
    firstName: "John",
    lastName: "Doe",
    admin: false,
    phoneNumber: "09173450089",
    gender: "male",
    birthDate: new Date().toISOString(),
    img: johnImg,
    password: "123",
    loggedIn: false,
  },
  {
    firstName: "jasmine",
    lastName: "Smith",
    admin: false,
    phoneNumber: "09173864321",
    gender: "female",
    birthDate: new Date().toISOString(),
    img: jasmineImg,
    password: "123",
    loggedIn: false,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    admin: false,
    phoneNumber: "09378864321",
    gender: "female",
    birthDate: new Date().toISOString(),
    img: janeImg,
    password: "123",
    loggedIn: false,
  },
  {
    firstName: "Mike",
    lastName: "Ross",
    admin: true,
    phoneNumber: "09389964322",
    gender: "male",
    birthDate: new Date().toISOString(),
    img: MikeImg,
    password: "123",
    loggedIn: false,
  },
  {
    firstName: "Sina",
    lastName: "Abedi",
    admin: true,
    phoneNumber: "09038394538",
    gender: "male",
    birthDate: new Date().toISOString(),
    img: defaultImg,
    password: "123",
    loggedIn: false,
  },
  {
    firstName: "John",
    lastName: "Wick",
    admin: true,
    phoneNumber: "09038394545",
    gender: "male",
    birthDate: new Date().toISOString(),
    img: JohnWick,
    password: "123",
    loggedIn: false,
  },
];
