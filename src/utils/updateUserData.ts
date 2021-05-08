import fs from 'fs';

export default async function updateUserData(id: number, data: TUserUpdate) {
  const path = __dirname + '/../data/userData.json';
  let users: TUser[];
  let userBuff = fs.readFileSync(path);
  let response: TSetUserResponse =  {} as TSetUserResponse;

  users = JSON.parse(userBuff.toString());

  const matchedUser = users.filter((user) => user.id === id)[0];
  const matchedUserEmail = users.filter((user) => {
    return user.id !== id && user.email === data.email;
  });

  if (!matchedUser) {
    response.error = 'Theres a problem in your request!';
    response.status = 401
    return response;
  }

  if (matchedUserEmail.length > 0) {
    response.error = 'Email already registered!';
    response.status = 400
    return response;
  }

  const updatedUsers = users.map((user) => {
    if (user.id === id) {
      user.email = data.email ? data.email : user.email;
      user.password = data.password ? data.password : user.password;
      user.name = data.name ? data.name : user.name;
      user.birth = data.birth ? data.birth : user.birth;
      user.gender = data.gender ? data.gender : user.gender;
    }
     
    return user;
  });

  fs.writeFileSync(path, JSON.stringify(updatedUsers, null, 2));

  response.message = 'Updated successfully!';
  response.status = 200
  return response;
}
