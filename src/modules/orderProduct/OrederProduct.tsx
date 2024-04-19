import s from "./OrederProduct.module.scss";
import sb from "../../shared/styles/_button.module.scss";
import {
  TextField,
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  StyledEngineProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReactPhoneInput from "react-phone-input-material-ui";
import React from "react";

interface Props {
  open: boolean;
  phone: string;
  eroorPhone: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  createOrder: () => void;
}

const checkInputPhone = (eroorPhone: boolean, phone: string) => {
  if (eroorPhone)
    return (
      <>
        {phone.length < 11 ? (
          <Alert severity="error">Номер введен не полностью.</Alert>
        ) : (
          <Alert severity="success">Номер введен полностью.</Alert>
        )}
      </>
    );
};

export const OrederProduct: React.FC<Props> = ({
  setOpen,
  open,
  phone,
  setPhone,
  eroorPhone,
  createOrder,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <button
        className={`${sb.button} ${sb.button__outline} ${sb.button__add}`}
        onClick={() => setOpen((prev: boolean) => !prev)}
      >
        <span>Сделать заказ</span>
      </button>
      <Dialog open={open} onClose={() => setOpen((prev: boolean) => !prev)}>
        <DialogTitle>Ваш номер</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Осталось совсем немного, введите свой номер телефона, чтобы мы могли
            подтвердить ваш заказ.
          </DialogContentText>
          <form>
            <ReactPhoneInput
              inputProps={{
                name: "phone",
                autoFocus: true,
              }}
              inputClass={s.input__phone}
              containerClass={s.input__conteiner}
              country={"ru"}
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              component={TextField}
            />
          </form>
          {eroorPhone ? checkInputPhone(eroorPhone, phone) : null}
          <DialogContentText paragraph={true} sx={{ mt: 3, mb: 0 }}>
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и <Link to="#">пользовательским соглашением.</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen((prev: boolean) => !prev)}>
            Отмена
          </Button>
          <Button onClick={createOrder}>Заказать</Button>
        </DialogActions>
      </Dialog>
    </StyledEngineProvider>
  );
};

export default OrederProduct;
