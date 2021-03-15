export const addItemToCart = (items, newItem) =>{
    const existingCartItem = items?.find(item => item.Id === newItem.Id);
    if (existingCartItem) {
        return items.map(item =>{
            const quantity = item.quantity ?? 0;
            return item.Id === newItem.Id ? { ...item, quantity: ++quantity } : {...item, quantity}
        });
    }
}
export const removeItemFromCart = (items, removeItem) =>{
    return items.map(item =>{
        return item.Id === removeItem.Id ? {...item, quantity: --item.quantity} : item;
    });
}