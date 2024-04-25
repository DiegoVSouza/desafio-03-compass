import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Category, CategoryGet, CategoryPost, CategoryPut } from "../../Domain/Model/Category";
import { CategoryRepositoryImpl } from "../../Data/Repository/CategoryRepositoryImpl";
import { GetCategorys } from "../../Domain/UseCase/Category/GetCategorys";
import { PostCategorys } from "../../Domain/UseCase/Category/PostCategorys";
import { PutCategorys } from "../../Domain/UseCase/Category/PutCategorys";
import { DeleteCategorys } from "../../Domain/UseCase/Category/DeleteCategorys";
import CategoryAPIDataSourceImpl from "../../Data/API/CategoryAPIDataSource";

interface CategoryModelContextProps {
  getCategorys(params?: CategoryGet): Promise<void>
  postCategorys(data: CategoryPost): Promise<void>
  putCategorys(data: CategoryPut): Promise<void>
  deleteCategorys(id: string): Promise<void>
  onChangeValue(id: String | undefined): void
  Categorys: Category[]
  Category: Category | undefined
}

interface Props {
  children: ReactNode;
}

const CategoryModelContext = createContext({} as CategoryModelContextProps);

function CategoryModelProvider({ children }: Props) {
  const [Categorys, setCategorys] = useState<Category[]>([]);
  const [Category, setCategory] = useState<Category>();

  const categorysDataSourceImpl = new CategoryAPIDataSourceImpl();
  const categorysRepositoryImpl = new CategoryRepositoryImpl(categorysDataSourceImpl);

  const getCategorysUseCase = new GetCategorys(categorysRepositoryImpl);
  const postCategorysUseCase = new PostCategorys(categorysRepositoryImpl);
  const putCategorysUseCase = new PutCategorys(categorysRepositoryImpl);
  const deleteCategorysUseCase = new DeleteCategorys(categorysRepositoryImpl);

  async function getCategorys(params?: CategoryGet) {
    setCategorys(await getCategorysUseCase.invoke(params));
  }
  async function postCategorys(data: CategoryPost) {
    setCategory(await postCategorysUseCase.invoke(data));
  }
  async function putCategorys(data: CategoryPut) {
    setCategory(await putCategorysUseCase.invoke(data));
  }
  async function deleteCategorys(id: string) {
    setCategory(await deleteCategorysUseCase.invoke(id));
    await getCategorys()
  }

  function onChangeValue(id: String | undefined) {
    if (id) {
      let Category = Categorys.find(item => item.id === id)
      setCategory(Category);
    } else {
      setCategory(undefined);
    }
  }


  return (
    <CategoryModelContext.Provider value={{
      getCategorys,
      postCategorys,
      putCategorys,
      deleteCategorys,
      onChangeValue,
      Categorys,
      Category
    }}>
      {children}
    </CategoryModelContext.Provider>
  );
  
}


const CategoryModel = (): CategoryModelContextProps => {
  const context = useContext(CategoryModelContext);

  if (!context) {
      throw new Error("");
  }

  return context;
};

export { CategoryModel, CategoryModelProvider };

