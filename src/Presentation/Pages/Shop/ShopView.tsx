import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import TittleBox from '../../Components/TittleBox/TittleBox';
import './ShopView.css'

export default function ShopView() {

  return (
    <main>
      <TittleBox/>
      <ProductHolder limit={16} pagination={true} />
    </main>
  );
}
