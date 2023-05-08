import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './ProductDetail.scss';
import { useState } from "react";
import Btn from "../../../components/UI/Btn/Btn";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ProductDetail = () => {
  const params = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const DUMMY_CATALOG = [
    { id: 'q1', title: 't-short', desc: 'loremrfrvr vgrfgrefge', price: '100$', img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21939930/images/3-42c5f6507fc01c346dddeca048608dbf.jpg' },
    { id: 'q2', title: 'cup', desc: 'loremrfrvr vgrfgrefge', price: '20$', img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21898648/images/3-3865c05611f165c30207216d078c39f1.jpg' }
  ];

  const product = DUMMY_CATALOG.find(product => product.id === params.id);

  const { t } = useTranslation();

  if (!product) {

  }

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const onClickHandler = () => { };

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
          <h5 className="title">{DUMMY_CATALOG[0].title}</h5>
          <span>{DUMMY_CATALOG[0].price}</span>
          <div className="props">
            <div className="select">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                    onChange={handleChange}
                  >
                    <MenuItem value={'S'}>S</MenuItem>
                    <MenuItem value={'M'}>M</MenuItem>
                    <MenuItem value={'L'}>L</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="quantity">
              <Stack direction="row" spacing={2}>
                <Button
                  className="quantity__btn"
                  
                  variant="contained"
                  onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}
                >
                  -
                </Button>
                  <span className="quantity__count">
                    {quantity}
                  </span>
                <Button
                  className="quantity__btn"
                  
                  variant="contained"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </Button>
              </Stack>
            </div>
            <div className="add-to-cart">
              <Btn
                title={t('cart.addToCart')}
                onClick={onClickHandler}
              />
            </div>
          </div>
          <div className="desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;