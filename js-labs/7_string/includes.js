// indexOf
// lastIndexOf
// includes

function hasEmail(str) {
  return str.includes('@gmail.com');
}

console.log(`${(str = 'abc abc@gmail.com def')} ==> ${hasEmail(str)}`);
