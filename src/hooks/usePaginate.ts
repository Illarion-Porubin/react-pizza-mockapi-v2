import { PizzaTypes } from "../types/types";

interface Props {
  items: number,
  currentPage: number,
  dataList: PizzaTypes[],
}

export const usePaginate = ({ items, dataList, currentPage }: Props) => {
  const allPages = Math.ceil(dataList.length / items);
  const minItems = currentPage >= 1 ? currentPage * items : currentPage;
  const maxItems = currentPage >= 1 ? minItems + items : items;
  const newDataList = dataList.slice(minItems, maxItems);

  return {
    data: {
      newDataList,
      allPages,
      items,
    }
  }
}
