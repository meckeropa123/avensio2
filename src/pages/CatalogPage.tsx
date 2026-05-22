import CategoryList from '../components/CategoryList';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import { categories } from '../data/products';
import { Category, Product } from '../types';

interface Props { products: Product[]; category: Category | 'все'; setCategory: (c: Category|'все')=>void; minPrice:number; setMinPrice:(n:number)=>void; minRating:number; setMinRating:(n:number)=>void; sort:string; setSort:(s:string)=>void; }
export default function CatalogPage(props: Props) {
  const { products, category, setCategory, minPrice, setMinPrice, minRating, setMinRating, sort, setSort } = props;
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Каталог</h1><CategoryList categories={categories} active={category} onSelect={setCategory} /><Filters minPrice={minPrice} maxRating={minRating} sort={sort} onMinPrice={setMinPrice} onMaxRating={setMinRating} onSort={setSort} /><ProductGrid products={products} /></div>;
}
