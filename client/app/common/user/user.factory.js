let UserFactory = function () {
  const user = {
    name: 'eissa',
    age: 25
  };

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
