export class StorageService{
    setExpiry(key, value, ttl){
     let now = new Date();

     let item ={
       value : value,
       expiry: now.getTime() + ttl
     }
     try {
        localStorage.setItem(key,JSON.stringify(item))
     } catch (error) {
        if(error.name === `QUOTA_EXCCEDED_ERR`){
            alert("Band Kar !!!!")
        }
     }
    }

    getExpiry(key){
        const getItem = localStorage.getItem(key);
        if(!getItem) return null ;

        const item = JSON.parse(getItem);
        const now  = new Date();
        if(now.getTime() > item.expiry){
            localStorage.removeItem(key)
            return null;
        }
        return item.value
    }
    clear(key) {
      localStorage.removeItem(key);
     }
}
