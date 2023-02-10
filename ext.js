"use strict"
//START DATA REQUEST
export const requestData = async () => {
    const req = await fetch("data");
    const data = await req.json();
    return data;
}
//END DATA REQUEST

export function resolveAfterSeconds(funct,x) {
    setTimeout(()=> {
         //console.log(`done ${funct.name} in ${x} ms`);
        funct()
    }, x)
}