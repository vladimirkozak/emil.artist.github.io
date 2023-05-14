import Btn from '../UI/Btn/Btn';
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const data = [
    {
      id: 'q1',
      title: 't-short',
      desc: 'loremrfrvr vgrfgrefge',
      price: '100$',
      img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21939930/images/3-42c5f6507fc01c346dddeca048608dbf.jpg',
    },{
      id: 'q1',
      title: 't-short',
      desc: 'loremrfrvr vgrfgrefge',
      price: '100$',
      img: 'https://shop-cdn1-2.vigbo.tech/shops/200037/products/21939930/images/3-42c5f6507fc01c346dddeca048608dbf.jpg',
    },
  ];

  return (
    <div className='cart'>
      <h3 className='cart__title'>Ваши товары</h3>
      {data?.map(item => (
        <div
          key={item.id}
          className='item'
        >
          <img src={item.img} alt='' />
          <div className='details'>
            <h5 className='details__title'>{item.title}</h5>
            <p className='details__desc'>{item.desc?.substring(0, 100)}</p>
            <div className='details__price'>
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlineIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>subtotal</span>
        <span>$123</span>
      </div>
      <Btn
        title={'check out'}
      />
    </div>
  );
};

export default Cart;