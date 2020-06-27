import { serve } from "https://deno.land/std/http/server.ts"

const server = serve({port:3000})
console.log('ascoltando sulla porta 3000');

for await (const req of server ){
    console.log('richiesta fatta')
    const url = req.url;
    req.respond({body:'ciao1'});
}
