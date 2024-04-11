import React, { ReactNode } from 'react';
import s from "./Container.module.scss";


interface Props {
    child: ReactNode
}

export const Container: React.FC<Props> = ({child}) => {
  return (
    <div className={s.container}>{child}</div>
  )
}
