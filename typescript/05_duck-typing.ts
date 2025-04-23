interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  // if(user.username){
  // Check if a user has an email and a password

  return true;
  // }
}

// any

// Technically this has a type because of duck typing
// Its type is PotentialUser
const newUser = {
  username: "senhorgomes",
  password: "password",
  favLanguages: "Javascript",
  favMovie: "Blade Runner"
}

login(newUser)