{
  console.group('Lý thuyết');

  // Create
  {
    console.group('Create');

    {
      const iterable = null;
      const set = new Set(iterable);

      console.group(`iterable = ${iterable}`);
      console.log(set);
      console.groupEnd();
    }

    {
      const iterable = [1, 1, 2, 2, 3, 3];
      const set = new Set(iterable);

      console.group(`iterable = ${iterable}`);
      console.log(set);
      console.groupEnd();
    }

    {
      const iterable = 'aabbcc';
      const set = new Set(iterable);

      console.group(`iterable = ${iterable}`);
      console.log(set);
      console.groupEnd();
    }

    {
      const iterable = new Set([1, 2, 3]);
      const set = new Set(iterable);

      console.group(`iterable = new Set([1, 2, 3]`);
      console.log(set);
      console.groupEnd();
    }

    console.groupEnd();
  }

  // Add & delete
  {
    console.group('Add & delete');

    const set = new Set();
    console.log(`const set = new Set();`);
    console.log(`set.size // ${set.size}`);

    console.log('');

    set.add(1);
    console.log(`set.add(1)`);
    set.add(2);
    console.log(`set.add(2)`);

    console.log('');

    console.log(`set.has(1) // ${set.has(1)}`);
    console.log(`set.has(3) // ${set.has(3)}`);

    console.log('');

    console.log(`set.delete(1) // ${set.delete(1)}`);
    console.log(`set.delete(3) // ${set.delete(3)}`);

    console.log('');

    set.clear();
    console.log(`set.clear()`);
    console.log(`set.size // ${set.size}`);

    console.groupEnd();
  }

  // Loop through set
  {
    console.group('Loop through set');

    const numberSet = new Set([1, 2, 3]);

    console.group('for of');
    for (const number of numberSet) {
      console.log(number); // 1, 2, 3
    }
    console.groupEnd();

    console.group('forEach');
    numberSet.forEach((number) => console.log(number)); // 1, 2, 3
    console.groupEnd();

    console.groupEnd();
  }

  console.groupEnd();
}

{
  console.group('Bài tập');

  console.groupEnd();
}
