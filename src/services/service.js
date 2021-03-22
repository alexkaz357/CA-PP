export const service = {
  query,
}

function query() {
  _addId();
  return items;
}

const items = [{
    title: 'Seared Salmon Fillet',
    desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    imgUrl: require('../assets/img/homepage/menu-items/menu-item1.jpg')
  },
  {
    title: 'Rosemary Filet Mignon',
    desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    imgUrl: require('../assets/img/homepage/menu-items/menu-item2.jpg')
  },
  {
    title: 'Summer Fruit Chocolate Mousse',
    desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
    imgUrl: require('../assets/img/homepage/menu-items/menu-item3.jpg')
  }
]

function _addId() {
  items.forEach(item => item.id = _makeId());
}

function _makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}