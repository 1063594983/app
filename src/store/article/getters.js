/*
export const someGetter = (state) => {}
 */

export const getArticleById = (state) => (id) => {
	var result = null;
	state.favoriteArticle.forEach(value => {
		if(value.id === id) {
			result = value;
		}
	});
	return result;
}
