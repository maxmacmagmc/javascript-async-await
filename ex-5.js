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
const showError = async()=>{
  try {
const resolve = await getJohnProfile();
console.log(resolve);
  } catch (error){
    console.log(error);
  }
}
showError()