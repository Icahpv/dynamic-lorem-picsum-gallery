const picsumAnimals = [
  {
    id:           237,
    title:        'A cute Puppy',
    src:          '237.jpg'
  },
  {
    id:           433,
    title:        'A sniffing bear',
    src:          '433.jpg'
  },
  {
    id:           577,
    title:        'Moose in the river',
    src:          '577.jpg'
  },
  {
    id:           582,
    title:        'Coyote in snow',
    src:          '582.jpg'
  },
  {
    id:           593,
    title:        'Tiger posing in his cage',
    src:          '593.jpg'
  },
  {
    id:           659,
    title:        'Husky looking a far',
    src:          '659.jpg'
  },
  {
    id:           718,
    title:        'Wolf who saw camera for the first time',
    src:          '718.jpg'
  },
  {
    id:           783,
    title:        'Monkey',
    src:          '783.jpg'
  },
  {
    id:           790,
    title:        'Elk',
    src:          '790.jpg'
  },
  {
    id:           837,
    title:        'Bulldog',
    src:          '837.jpg'
  },
  {
    id:           1024,
    title:        'Bird',
    src:          '1024.jpg'
  },
  {
    id:           1025,
    title:        'Pug',
    src:          '1025.jpg'
  },
  {
    id:           1074,
    title:        'Big Cat',
    src:          '1074.jpg'
  },
  {
    id:           1084,
    title:        'Walrus',
    src:          '1084.jpg'
  }
];


let output = '';

picsumAnimals.forEach(function(imageId){

  output += `
  <a href="images/sm/${imageId.id}.jpg"> 
    <img src="images/sm/${imageId.id}.jpg" alt="${imageId.title}">
  </a>
  `
});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;