/*
export const someMutation = (state) => {}
 */

export const addArticle = (state, article) => {
	var length = state.favoriteArticle.length;
	state.favoriteArticle.push({
		id: length +  1 + '',
		author: 'zouzou',
		title: article.title,
		content: article.content,
		star: Math.floor(Math.random() * 2000),
		commentNum: Math.floor(Math.random() * 1000)
	})
}
