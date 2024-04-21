import React from 'react'
import { useCustomDispatch } from './store';
import { CartTypes, PizzaTypes } from '../types/types';
import { cartSlice } from '../redux/slices/cartSlice';


interface Props {
    data: PizzaTypes;
    indexSize: number;
    indexTypes: number;
    pizzaCount: number;
    setPizzaCount: React.Dispatch<React.SetStateAction<number>>;
}

export const useOrder = ({ data, indexSize, indexTypes, pizzaCount, setPizzaCount }: Props) => {
    const dispatch = useCustomDispatch();
    const sizePrice = [0, 130, 255];
    const typePrice = [50, 100];
    const priceOnePizza = +data.price + +sizePrice[indexSize] + +typePrice[indexTypes];

    const orderPizza = React.useCallback((data: PizzaTypes) => {
        if (pizzaCount) {
            const newOrder = {
                ...data,
                sizes: data.sizes[indexSize],
                types: indexTypes ? "традиционная" : "тонкая",
                price: priceOnePizza,
                pizzasCount: pizzaCount,
                identity: data.title + indexTypes + indexSize
            }
            dispatch<{ payload: CartTypes; type: string }>(cartSlice.actions.addOrder(newOrder))
            setPizzaCount(0)
        }
    }, [dispatch, indexSize, indexTypes, pizzaCount, priceOnePizza, setPizzaCount])

    return {
        options: {
            sizePrice,
            typePrice,
            priceOnePizza,
            orderPizza
        }
    }
}
