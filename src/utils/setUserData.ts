import fs from 'fs';

export default async function setUserData(newUser: TUser) {
  const path = __dirname + '/../data/userData.json'
  let users: TUser[];
  let userBuff = fs.readFileSync(path);
  let response: TSetUserResponse = {}

  users = JSON.parse(userBuff.toString());

  let unique = true
  users.map( user => {
    if(user.email === newUser.email) {
      unique = false
    }
  })

  if(unique) users.push(newUser)
  else response.error = 'Email already exists!'

  fs.writeFileSync(path, JSON.stringify(users, null, 2));

  return response;
}