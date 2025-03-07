//Exercise #1

let getJohnProfile = () => {
	return new Promise(function (resolve) {
		setTimeout(
			() =>
				resolve({
					name: "John",
					age: 20,
					hobbies: ["Coding", "Football"],
				}),
			1000
		);
	});
};
// Start coding here
// const getJohnProfileWithJohn = () => {
// 	return fetch(getJohnProfile());
// };

getJohnProfile()
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
