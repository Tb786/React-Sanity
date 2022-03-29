import client from '../client'

const fields = `
  _id,
  title,
	'actor': actor->full_name,
  'slug': slug.current,
  'category': category->name.current,
`


export const getMovie = async () => {
	const data = await client.fetch(`*[_type == "movie"]{${fields}}`);
	return data;

}




