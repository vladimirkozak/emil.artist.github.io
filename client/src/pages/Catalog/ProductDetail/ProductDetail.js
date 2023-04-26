import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const params = useParams();

  const DUMMY_CATALOG = [
    { id: 'q1', title: 't-short', desc: 'loremrfrvr vgrfgrefge', price: '100$', img: 'C:\Users\vladimir\Downloads\v1xwm0kqomnb2d2wd2esey56gesqlgvv.jpg' },
    { id: 'q2', title: 'cup', desc: 'loremrfrvr vgrfgrefge', price: '20$', img: 'C:\Users\vladimir\Downloads\v1xwm0kqomnb2d2wd2esey56gesqlgvv.jpg' }
  ];

  const product = DUMMY_CATALOG.find(product => product.id === params.id);

  const { t, i18n: {changeLanguage} } = useTranslation();

  if (!product) {

  }

  return (
    <section>
      <h1>product detail</h1>
      {t('description.part1')}
      <p>{product?.title}</p>

      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("pl")}>PL</button>
    </section>
  );
};

export default ProductDetail;