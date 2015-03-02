'use strict';

import React from 'react';
import Header from '../Header/Header.jsx';
import Body from '../Body/Body.jsx';
import Footer from '../Footer/Footer.jsx';
import ItemsStore from '../../stores/ItemsStore';
import SelectedStore from '../../stores/SelectedStore';

function getAppState() {
  return {
    items: ItemsStore.getAll(),
    selectedItems: SelectedStore.getAll()
  };
}

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getAppState();
  }

  componentDidMount() {
    ItemsStore.addChangeListener(this._onChange.bind(this));
    SelectedStore.addChangeListener(this._onChange.bind(this));

    ItemsStore.setAll(
      ['Item 1', 'Item 2'].map(function(item, i) {
        return {
          id: i,
          label: item
        }
      })
    );
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this._onChange);
    SelectedStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={'app'}>
        <Header />
        <Body
          items={this.state.items}
          selectedItems={this.state.selectedItems} />
        <Footer />
      </div>
    );
  }
}
