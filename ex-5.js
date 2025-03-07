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
// console.log(await getJohnProfile());
const profileShow = async () => {
	try {
		const datauser = await getJohnProfile();
		console.log(datauser);
	} catch (error) {
		console.log(error);
	}
};

profileShow();
