const getDog = async () => {
	const response = await fetch('https://dog.ceo/api/breeds/image/random');
	if (response.ok) {
		const body = await response.json();
		const { message, status } = body
		const breed = message.split('breeds/')[1].split("/")[0]
		showTemplate(breed, message, status);
	} else {
		throw new Error('status is ' + response.status);
	}
}

const showTemplate = (breed, msg, status) => {
	const imgWrap = document.querySelector('.img-wrap');
	imgWrap.innerHTML = `
	<h1>Breed is ${breed}</h1>
	<img src=${msg}>`
	console.log(`Status is ${status}!`)
}


document.querySelector('button').addEventListener('click', getDog);