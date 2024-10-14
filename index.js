const moo = "cow";
const neigh = "horse";
const baa = "sheep";
const oink = "pig";
const cluck = "chicken";

const bessie = "cow";
const dolly = "sheep";
const babe = "pig";
const little = "chicken";

const blackAndWhite = "cow";
const black = "sheep";
const pink = "pig";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

const initials = ["red", "orange", "yellow", "green", "blue", "violet"];
const [r, o, y, g, b, v] = initials;

const indg = colors[5];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const { muppetName, color, song, job, partner } = muppet;

const muppetSongs = [
  "Rainbow Connection",
  "Moving Right Along",
  "The Muppet Show Theme",
  "I Hope That Something Better Comes Along"
];

const [song1, song2, , song4] = muppetSongs;

const nestedMuppet = {
  job: "Host of The Muppet Show",
  partner: "Miss Piggy",
};

const { job: nestedJob, partner: nestedPartner } = nestedMuppet;
