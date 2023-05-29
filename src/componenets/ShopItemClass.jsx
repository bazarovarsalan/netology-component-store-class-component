import React, { Component } from 'react'
import PropTypes from "prop-types"
import App from '../App';

export default class ShopItemClass extends Component {
    static defaultProps = {
        item: {
            descriptionFull: "Description of this item is not available now",
        }
    }
    // Не могу понять почему defaultProps отрабатывает только в том случае если я в пропсы ничего не передается
    // если же я передаю item, но с отсутсвущим значением description то не работает 

    static propTypes = {
        item: PropTypes.shape({
            brand: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            descriptionFull: PropTypes.string,
            price: PropTypes.number,
            currency: PropTypes.oneOf(["£","$","€","¥"])
        })
    } 

  render() {
    const {brand, title, description, descriptionFull, price, currency} = this.props.item;
    return (
      <div>
        <div className="main-content">
        <h2>{brand}</h2>
        <h1> {title}</h1>
        <h3>{description}</h3>
         <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
        <div className="price">{currency}{price? price.toFixed(2) : undefined}</div>
        <button onClick={() => alert("Товар дабавлен в корзину")}>Добавить в корзину</button>
        </div>
        </div>
      </div>
    )
  }
}


ShopItemClass.d