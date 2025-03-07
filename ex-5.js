// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
const fetchProfile = async () => {
  try {
    await getJohnProfile();
  } catch (profile) {
    console.log(profile);
  }
};

fetchProfile();
