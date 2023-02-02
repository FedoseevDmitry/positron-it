import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => ({
    cartData: {
      items: [
        {
          id: 1,
          title: 'Вытяжное устройство G2H',
          description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1065',
          price: 12644,
          photoId: 1,
          count: 1,
        },
        {
          id: 2,
          title: 'Вытяжное устройство BXC',
          description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1065',
          price: 12644,
          photoId: 2,
          count: 2,
        },
        {
          id: 3,
          title: 'Вытяжное устройство GHN',
          description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          article: 'G2H1065',
          price: 12644,
          photoId: 3,
          count: 1,
        },
      ],
      isInstallRequired: false,
      currency: '₽',
    }
  }),
  getters: {
    cartTotalPrice(state) {
      let totalPrice = 0;

      state.cartData.items.forEach(elem => {
        totalPrice += elem.price * elem.count;
      });

      return totalPrice;
    },
    cartItemTotalCount(state) {
      let totalCount = 0;

      state.cartData.items.forEach(elem => {
        totalCount += elem.count;
      });

      return totalCount;
    }
  },
  mutations: {
    increaseCartItemCount (state, itemId) {
      const cartItem = findItemById(state, itemId);
      if (cartItem == null) return;
      cartItem.count++;
    },
    decreaseCartItemCount (state, itemId) {
      const cartItem = findItemById(state, itemId);
      if (cartItem == null) return;
      if (cartItem.count <= 1) return;
      cartItem.count--;
    },
    deleteItemCart (state, itemId) {
      const cartItemIndex = findItemByIndex(state, itemId);
      if (cartItemIndex == null) return;
      state.cartData.items.splice(cartItemIndex, 1);
    },
    clearCart (state) {
      state.cartData.items = [];
      state.cartData.isInstallRequired = false;
    },
    cartTotalPrice(state) {
      let totalPrice = 0;

      state.cartData.items.forEach(elem => {
        totalPrice += elem.price;
      });

      return totalPrice;
    },
    cartItemTotalCount(state) {
      let totalCount = 0;

      state.cartData.items.forEach(elem => {
        totalCount += elem.count;
      });

      return totalCount;
    },
    
  },
  actions: {
    sendDataToServer({ state }) {
      axios.post('/posts', state.cartData, {
        params: {},
        headers: { 'Content-Type': 'application/json' },
        baseURL: 'https://jsonplaceholder.typicode.com',
      }).then(data =>
          console.log('Результат:' + JSON.stringify(data))
      ).catch(err => {
          console.log(err)
          return null
      })
    }
  },
  modules: {
  }
})

function findItemById(state, itemId) {
  return state.cartData.items.find(item => item.id == itemId);
}
function findItemByIndex(state, itemId) {
  return state.cartData.items.findIndex(item => item.id == itemId);
}