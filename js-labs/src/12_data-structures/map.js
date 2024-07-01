{
  const cityList = [
    { id: 1, name: 'TP. Hồ Chí Minh' },
    { id: 2, name: 'Bình Dương' },
  ];

  const studentList = [
    { id: 123, name: 'Alice', cityId: 1 },
    { id: 321, name: 'Bob', cityId: 2 },
  ];

  // Question: How to show city name for each student?
  const cityMap = cityList.reduce((map, city) => {
    map[city.id] = city;
    return map;
  }, {});

  // console.log(cityMap[1].name);
  // console.log(cityMap[2].name);
}

{
  {
    const map = new Map();

    // console.log('map.size: ', map.size);
  }

  {
    const map = new Map([
      [1, 'TP. Hồ Chí Minh'],
      [2, 'Bình Dương'],
    ]);

    // console.log('map: ', map);
    // console.log('map.size: ', map.size);
  }

  {
    const map = new Map();

    map.set('a', 1);
    map.set('a', 2);

    // console.log(map);

    // console.log("map.get('a'): ", map.get('a'));
    // console.log("map.get('b'): ", map.get('b'));

    // console.log("map.delete('b'): ", map.delete('b'));
    // console.log("map.delete('a'): ", map.delete('a'));

    // console.log("map.get('a'): ", map.get('a'));
    // console.log('map.size: ', map.size);
  }

  {
    const map = new Map([
      [1, 'TP. Hồ Chí Minh'],
      [2, 'Bình Dương'],
    ]);

    console.group('for of');
    for (const [key, value] of map) {
      console.log([key, value]);
    }
    console.groupEnd();

    console.group('forEach');
    map.forEach((key, value) => {
      console.log([key, value]);
    });
    console.groupEnd();
  }
}
