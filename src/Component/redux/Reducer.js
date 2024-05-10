import { AddToCart, RemoveFromCart, EmptyCart, EmptyAllCart, AddToWishList, RemoveFromWishList, EmptyAllWishList } from "./Types";
const initialValue = [];
const initialWishList = [];

export const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case AddToCart:
            let findProduct = state.find(product => product.id == action.payLoad);
            if (!findProduct) {
                return state = [...state, { id: action.payLoad, count: 1 }]
            } else {
                return state = state.map(product => {
                    if (product.id == findProduct.id) {
                        return { ...product, count: product.count + 1 }

                    } else {
                        return product
                    }
                })
            }
        case RemoveFromCart:
            let findProductForDelet = state.find(product => product.id == action.payLoad)
            if (findProductForDelet) {
                if (findProductForDelet.count > 1) {
                    return state = state.map(product => {
                        if (product.id == findProductForDelet.id) {
                            return { ...product, count: product.count - 1 }
                        } else {
                            return product
                        }
                    })

                } else {
                    return state = state.filter(product => product.id != findProductForDelet.id)
                }
            }
            break;

        case EmptyCart:
            let findProductForRemove = state.find(product => product.id == action.payLoad);
            if (findProductForRemove) {
                return (state = state.filter(product => product.id != findProductForRemove.id))
            }
            break;

        case EmptyAllCart:
            return initialValue
        default:
            return state
    }
}
// wishList
export const WishListReducer = (state = initialWishList, action) => {
    switch (action.type) {
        case AddToWishList:
            return state = [...state, { id: action.payLoad }]
            
        case RemoveFromWishList:
            let findItemWishList = state.find(wishlist => wishlist.id == action.payLoad)
            if (findItemWishList) {
                return state = state.filter(wish => wish.id != findItemWishList.id)
            } else {
                return state
            }
            break;
            
            case EmptyAllWishList:
                return initialWishList;
                
                default:
                    return state;
                }
    }
