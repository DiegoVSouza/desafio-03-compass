import { CategoryModel } from '../../../main/hooks/useCategoryModel';
import Features from '../../Components/Features/Features';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import TittleBox from '../../Components/TittleBox/TittleBox';
import './ShopView.css'

export default function ShopView() {
  const { Category } = CategoryModel()

  return (
    <main>
      <TittleBox />
      <ProductHolder limit={16} pagination={true} categoryId={Category?.id} />
      <Features />
    </main>
  );
}
