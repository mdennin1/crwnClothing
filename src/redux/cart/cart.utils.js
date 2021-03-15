export const addItemToCart = (items, newItem) =>{
    const existingCartItem = items?.find(item => item.Id === newItem.Id);
    if (existingCartItem) {
        return items.map(item =>{
            let quantity = item.quantity ?? 0;
            return item.Id === newItem.Id ? { ...item, quantity: ++quantity } : {...item, quantity}
        });
    }
    return [...items, { ...newItem, quantity: 1 }];
}
export const removeItemFromCart = (items, removeItem) =>{
    return items.map(item =>{
        return item.Id === removeItem.Id ? {...item, quantity: --item.quantity} : item;
    });
}