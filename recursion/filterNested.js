// https://stackoverflow.com/questions/38517373/trying-to-apply-a-filter-to-a-nested-array-full-of-objects?rq=1//

//       https://stackoverflow.com/questions/38375646/filtering-array-of-objects-with-arrays-based-on-nested-value


//  https://stackoverflow.com/questions/38517373/trying-to-apply-a-filter-to-a-nested-array-full-of-objects?rq=1
const resources = [
    {
      title: 'Learn JS',
      categories: [
        {
          name: 'javascript'
        },
        {
          name: 'css'
        }
      ]
    },
    {
      title: 'Learn CSS',
      categories: [
        {
          name: 'css'
        }
      ]
    },
    {
      title: 'Learn other stuff',
      categories: [
        {
          name: 'jQuery'
        },
        {
          name: 'javascript'
        }
      ]
    },
    {
      title: 'Learn node',
      categories: [
        {
          name: 'node'
        }
      ]
    },
    {
      title: 'Learn React',
      categories: [
        {
          name: 'react'
        }
      ]
    },
  
  ];

  function filterByCatName(resources, category){
      return resources.filter(function(resource){
          return resource
                 .categories
                 .some(function(cat){
                    return cat.name === category;
                 })
      })
  }

  console.log(filterByCatName(resources, 'javascript'))