import tmp from './templating.js'

const apiKey = "19420284-73c549d870430bcf92a3ef2ad";
const baseUrl = "https://pixabay.com/api/";
export default {
	fetchPics(searchQuery, page) {
		const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
		return fetch(url)
			.then(res => res.json())
			.then(pics => pics.hits)
			.catch(`Error`);
	}
}