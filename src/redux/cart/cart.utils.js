export const addItemToCart = (items, newItem) =>{
    const existingItem = items.find(item => newItem.Id === item.Id);
    return existingItem ? items.map(item =>{
        return item.Id === newItem.Id ? { ...item, quality: ++item.quality } : item;
    }) : [...items, newItem];
}