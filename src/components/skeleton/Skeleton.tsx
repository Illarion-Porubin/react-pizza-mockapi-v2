import s from "./Skeleton.module.scss";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <div className={s.skeleton}>
      <ContentLoader
        rtl
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 500"
        backgroundColor="#cfcfcf"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="130" r="120" fill="#D9D9D9" />
        <rect x="34" y="266" width="210" height="20" rx="5" fill="#D9D9D9" />
        <rect x="10" y="300" width="260" height="95" rx="12" fill="#D9D9D9" />
        <rect x="10" y="420" width="260" height="50" rx="12" fill="#D9D9D9" />
      </ContentLoader>
    </div>
  );
};
