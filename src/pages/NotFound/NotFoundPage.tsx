import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <h1 className={s.notFound}>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
  );
};
