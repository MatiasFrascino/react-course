import cartImg from '../assets/cart.png'

const CartWidget = () => {
  return (
    <div className='cartBox'>
        <img src={cartImg} className='cart' alt="" />
        <p>1</p>
    </div>
  )
}

export default CartWidget