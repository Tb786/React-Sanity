export default {
	type: 'document',
	name: 'movie',
	title: 'Movie',
	fields: [
		{
			title: 'Tittel',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Actor',
			name: 'actor',
			type: 'reference',
			to: [{ type: 'actor' }]
		}
	]
}