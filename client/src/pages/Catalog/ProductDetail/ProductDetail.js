import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './ProductDetail.scss';
import { useState } from "react";
import Button from "../../../components/UI/Button/Button";

const ProductDetail = () => {
  const params = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const DUMMY_CATALOG = [
    { id: 'q1', title: 't-short', desc: 'loremrfrvr vgrfgrefge', price: '100$', img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21939930/images/3-42c5f6507fc01c346dddeca048608dbf.jpg' },
    { id: 'q2', title: 'cup', desc: 'loremrfrvr vgrfgrefge', price: '20$', img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21898648/images/3-3865c05611f165c30207216d078c39f1.jpg' }
  ];

  const product = DUMMY_CATALOG.find(product => product.id === params.id);

  const { t } = useTranslation();

  if (!product) {

  }

  const onClickHandler = () => {};

  return (
    <section className="product">
      <div className="product-container">
        <div className="left">
          <div className="images">
            <img
              src={DUMMY_CATALOG[0].img}
              onClick={() => setSelectedImg(0)}
              alt="detail_img"
            />
            <img
              src={DUMMY_CATALOG[1].img}
              onClick={() => setSelectedImg(1)}
              alt="detail_img"
            />
          </div>
          <div className="mainImg">
            <img
              src={DUMMY_CATALOG[selectedImg].img}
              alt="main_detail_img"
            />
          </div>
        </div>
        <div className="right">
          <h5>{DUMMY_CATALOG[0].title}</h5>
          <span>{DUMMY_CATALOG[0].price}</span>
          <div>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="quantity">
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <Button
            title={t('cart.addToCart')}
            onClick={onClickHandler}
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and 
            Lorem Ipsum is simply dummy text of the printing and 
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;