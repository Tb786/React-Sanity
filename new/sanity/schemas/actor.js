export default {
  type: 'document', 
  name: 'actor', 
  title: 'Actor', 
  fields: [
    {
      title: 'Full name', 
      name: 'full_name', 
      type: 'string',
    },
    {
      title: 'Name', 
      name: 'name', 
      type: 'slug',
    }
  ]
}