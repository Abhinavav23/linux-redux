export const initialShopValue = {
    cloth: 50,
    mobile: 100
}

export const shopReducer = (initialValue=initialShopValue, shopAction) => {
    if(shopAction.type === 'buying-cloth'){
        return {
            ...initialValue,
            cloth: initialValue.cloth - 1
        }
    } else if(shopAction.type === 'buying-mobile'){
        return {
            ...initialValue,
            mobile: initialValue.mobile - 1
        }
    }
    return initialValue
}