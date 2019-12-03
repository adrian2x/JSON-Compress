require('./JSONC').inject(JSON);

var data = {
  random: 'data',
  for: [
    'testing',
    'and',
    'perfecting',
  ],
  so: {
    I: 'can',
    be: 'sure',
    thatIt: 'works',
    for: [
      'every',
      'object',
    ],
  },
};

console.log('\nJSONC.compress()');
var compressedData = JSON.compress(data);
console.log(compressedData);

console.log('\nJSONC.decompress()');
var decompressedData = JSON.decompress(compressedData);
console.log(decompressedData);

console.log('\nJSONC.pack()');
var packedData = JSON.pack(data);
console.log(packedData);

console.log('\nJSONC.unpack()');
var unpackedData = JSON.unpack(packedData);
console.log(unpackedData);