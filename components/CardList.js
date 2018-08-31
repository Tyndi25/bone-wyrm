import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { connect } from 'react-redux';

import { getAllCards } from './reducer';

class CardList extends Component {
  componentDidMount() {
    this.props.getAllCards();
  }



  renderItem = ({ item }) => {
    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
    const uri = `${item.imageUrl}`
    return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name} | {item.type}</Text><Image style={styles.image} {...{preview, uri}} />
    </View>
  )};
  render() {
    const { cards } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={cards}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  text: {
    marginRight: 'auto'
  },
  image: {
    marginLeft: 'auto',
    width: 66,
    height: 58
  }
});

const mapStateToProps = state => {
  let storedCards = state.cards.map(card => ({ key: card.id, ...card }));
  return {
    cards: storedCards
  };
};

const mapDispatchToProps = {
  getAllCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);