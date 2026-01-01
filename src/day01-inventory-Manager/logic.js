export function getReorderList(inventoryList) {
    return inventoryList.filter((item)=> item.stock<3)
    .map((product)=>product.name)
}