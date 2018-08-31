import mtg from 'mtgsdk';

const getAllCards = function() {
  mtg.card.all()
  .on('data', function(card) {
    return card;
  });
}

export default {
  getAllCards
}