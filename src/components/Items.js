import React from 'react';

const items = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794_1280.jpg",
    name: '手袋',
    price: '600円',
  },
  {
    id: 2,
    image:'https://pixabay.com/get/gf8cb698183feb6c2f84ba85c8bf0096093764e6f8a3f902371ee2f4bde0df0b15db9605ae9632d18744e0d83aa9d4f76738ce10cb650b7282b1d9d3973e79510_640.jpg',
    name: '兵隊さん',
    price: '8000円',
  },
  {
    id: 3,
    image: 'https://pixabay.com/get/ge42493ae85c145280c9c1e798b7ff233176a5b161bcae5e0ff8e962c4fa05165e953d0e492e7a680d3dc07d5943ab565_640.jpg',
    name: 'プレゼント',
    price: '？円',
  },
  {
    id: 4,
    image: 'https://pixabay.com/get/g8893c40745d76f96ade7355f523eafd92f77d37fa83525130b092ba485630d6b526f4de921fde5674ac38e3fe0a44f8b_640.jpg',
    name: 'おもちゃ',
    price: '2000円',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1622473541183-ddae2b015b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8MjB8fHBsdXNoJTIwdG95fGVufDB8fHx8MTY4NzI3NDIyNXww&ixlib=rb-4.0.3&q=80&w=400',
    name: 'ぬいぐるみ',
    price: '3000円',
  },
];

const Items = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-10">
      {items.map(item => (
        <div key={item.id} className="bg-white p-4 shadow-md">
          <img src={item.image} alt={item.name} className="w-full mb-4" />
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-500">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;