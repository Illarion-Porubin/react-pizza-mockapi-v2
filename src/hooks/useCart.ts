import { selectCartData } from "../redux/selectors";
import { CartTypes } from "../types/types";
import { useCustomDispatch, useCustomSelector } from "./store";
import { cartSlice, fetchOrder } from "../redux/slices/cartSlice";
import { useConfetti } from "./useConfetti";

interface Props {
    setErrorPhone: React.Dispatch<React.SetStateAction<boolean>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    phone: string
}

export const useCart = ({setOpen, setErrorPhone, phone}: Props) => {
    const dispatch = useCustomDispatch();
    const cart = useCustomSelector(selectCartData);
    const confetti = useConfetti

    const totalPrice = cart.items?.reduce(
        (sum: number, current: CartTypes) =>
            sum + current.price * current.pizzasCount,
        0
    );
    const totalCount = cart.items?.reduce(
        (sum: number, current: CartTypes) => sum + current.pizzasCount,
        0
    );

    const onClickClear = () => {
        if (window.confirm("Очистить корзину?")) {
            dispatch(cartSlice.actions.clearItems());
        }
    };
    const createOrder = () => {
        if (phone.length < 11) return setErrorPhone(true);
        confetti();
        setOpen(false);
        dispatch(fetchOrder({ phone, cart: cart.items }));
        dispatch(cartSlice.actions.clearItems());
    };

    return{
        data: {
            cart,
            totalPrice,
            totalCount,
            onClickClear,
            createOrder
        }
    }
}
