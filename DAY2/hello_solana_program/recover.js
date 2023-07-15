const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('5BeWvAMqPBwJQT5Zj2pS4HcHpTiZuijaSDa64CYoVqAjEebna8bFAe57H9xJkZKnbTZGxm7pe9segd8WiCkKEee');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);