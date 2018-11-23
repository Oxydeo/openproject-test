import React, { Component } from 'react';

import Aux from '../../../hoc/Auxe';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {

    
  }
  render () {
    const ingredientSummary = Object.keys( this.props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );
    return (
      <Aux>
          <h3>Votre commande</h3>
          <p>Votre burger contient les éléments suivant:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong> Prix total: {this.props.price.toFixed(2)} €</strong></p>
          <p>Continuer vers le règlement?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>FERMER</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUER</Button>
      </Aux>
    );
  }
}

export default OrderSummary;