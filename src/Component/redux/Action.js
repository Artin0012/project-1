import { AddToCart, RemoveFromCart, EmptyCart, EmptyAllCart, AddToWishList, RemoveFromWishList, EmptyAllWishList } from "./Types";

// cart
export const DoAddToCart = (id) => {
    return {
        type: AddToCart,
        payLoad: id
    }
}
export const DoRemoveFromCart = (id) => {
    return {
        type: RemoveFromCart,
        payLoad: id
    }
}
export const DoEmptyCart = (id) => {
    return {
        type: EmptyCart,
        payLoad: id
    }
}
export const DoEmptyAllcart = () => {
    return {
        type: EmptyAllCart,
    }
}
// wishlist
export const DoAddToWishList = (id) => {
    return {
        type: AddToWishList,
        payLoad: id
    }
}
export const DoRemoveFromWishList = (id) => {
    return {
        type: RemoveFromWishList,
        payLoad: id
    }
}

export const DoEmptyAllWishList = () => {
    return {
        type: EmptyAllWishList,
    }
}