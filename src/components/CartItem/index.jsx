import React from 'react'
import styles from "./CartItem.module.css"

const CartItem = ({product,removeItem, clear, sumTotalCart,isIncart}) => {
  return (

<div >
<button className={styles.cartClear} onClick={()=>clear()}>Clear Cart</button>
    <div className={styles.cartItem}>
      <p className={styles.prodTitle}>{product.item.title}</p>
      
      <p className={styles.prodCount}>qty: {product.count}</p>
      <p className={styles.prodPrice}>USD: {product.item.price}</p>

      <div>
      <div className={styles.cartItemActions}></div>
        <button className={styles.cartActions} onClick={()=>removeItem(product.item.id)}>Remove</button>

        
      </div>

    </div>
</div>

  )
}

export default CartItem