import React from 'react'
import './App.css'
import ShopItemClass from './componenets/ShopItemClass'

function App() {
  class Items {
    constructor(brand, title, description, descriptionFull, price, currency ) {
      this.brand = brand;
      this.title = title;
      this.description = description;
      this.descriptionFull = descriptionFull;
      this.price = price;
      this.currency = currency
    }
  }
 

  const item = new Items('Tiger of Sweden','Leonard coat', 'Minimalistic coat in cotton-blend','Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',399, '£');

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item instanceof Items ? item : undefined} />
      {/* Правильно ли так использовать instanceof ? Как можно использовать 
      instanceof при проверке компонента используя propTypes. 
      У меня не получилось, так как  класс Items в компоненте не доступен*/}
    </div>
  </div>
  )
}

export default App
