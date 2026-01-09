export function debounceAPI(fnc, delay){
 let timer;

 return function(...args){
    setTimeout(timer)
    timer = setInterval(() => {
        fnc(...args)
    }, delay);
 }
}