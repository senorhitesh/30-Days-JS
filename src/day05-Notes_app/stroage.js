export function saveToStorage(key, value){
   const jsonString = JSON.stringify(value);
   localStorage.setItem(key , jsonString)
}

export function getFromStorage(key){
    const jsonArray = localStorage.getItem(key)
    if(!jsonArray){
        return []
    }
    return JSON.parse(jsonArray);
}

export function DeleteStroage(key){
 localStorage.removeItem(key);
}