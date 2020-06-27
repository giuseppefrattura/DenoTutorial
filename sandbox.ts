const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();

const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));

const text = encoder.encode('Ciao ninja');

await Deno.writeFile('readme.txt',text);
await Deno.rename('readme.txt','deleteme.txt');
await Deno.remove('deleteme.txt');

await Deno.create('readme.txt');
await Deno.writeFile('readme.txt',text);

const newData = await Deno.readTextFile('readme.txt');
console.log(newData);
