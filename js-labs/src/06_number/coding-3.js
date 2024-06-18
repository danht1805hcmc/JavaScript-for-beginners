function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return 0;
  if (passengersCount <= 4) return 1;
  if (passengersCount <= 7) return 1;
  return Math.ceil(passengersCount / 7);
}

console.log('Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ');
console.log(`${(passengersCount = 6)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 7)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 10)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 20)} => ${getTaxiCount(passengersCount)}`);

console.log('Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ');
console.log(`${(passengersCount = 4)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 3)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 1)} => ${getTaxiCount(passengersCount)}`);
console.log(`${(passengersCount = 0)} => ${getTaxiCount(passengersCount)}`);
