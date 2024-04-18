import { PizzaTypes } from "../types/types";


interface Props {
    quantityItems: number,
    currentPage: number,
    dataList: PizzaTypes[],
}

export const usePaginate = ({quantityItems, dataList, currentPage}: Props) => {
    const allPages = Math.ceil(dataList.length / quantityItems);
    const minItems = currentPage >= 1 ? currentPage * quantityItems : currentPage;
    const maxItems = currentPage >= 1 ? minItems + quantityItems : quantityItems;
    const newDataList = dataList.slice(minItems, maxItems);

  return {
    paginate: {
        newDataList,
        allPages,
    }
  }
}
