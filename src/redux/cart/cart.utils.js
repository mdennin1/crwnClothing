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
export const decreaseItemQuantity = (items, selectedItem) =>{
    return items.map(item =>{
        return item.Id === selectedItem.Id ? {...item, quantity: --item.quantity} : item;
    }).filter(item => item.quantity > 0);
}
export const removeFromCart = (items, item) =>items.filter(i => i.Id !== item.Id);