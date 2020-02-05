import Vuex from "vuex";
import { fireDb } from "~/plugins/firebase.js";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPro: [],
      finlePro: [],
      singlePro: [],
      city: "الجميع",
      type: "الجميع",
      space: 1,
      price: 1
    },
    mutations: {
      setPro(state, pro) {
        state.loadedPro = pro;
      },

      changeCity(state, payload) {
        state.city = payload;
      },
      changeSpace(state, payload) {
        state.space = payload;
      },
      changeType(state, payload) {
        state.type = payload;
      },
      changePrice(state, payload) {
        state.price = payload;
      },
      setFinlePro(state, pro) {
        state.finlePro = pro;
      },
      setSinglePro(state, payload) {
        state.singlePro = payload;
      }
    },
    actions: {
      // fetching data from firebase data base
      nuxtServerInit(vuexContext) {
        return fireDb
          .collection("pro")
          .get()
          .then(snapshot => {
            let proArray = [];
            snapshot.forEach(doc => {
              let pro = doc.data();

              proArray.push({ ...pro, id: doc.id });

              vuexContext.commit("setPro", proArray);

              vuexContext.commit("setFinlePro", proArray);
            });
          });
      },
      // filter proprty
      filterPro({ state, commit }, payload) {
        let name = payload.name;
        let value = payload.value;
        commit(name, value);

        let { city, space, type, price, loadedPro } = state;
        // convert space,price to number
        space = parseInt(space);
        price = parseInt(price);
        // get all prop
        let tempPro = [...loadedPro];
        // filter by city
        if (city !== "الجميع") {
          tempPro = tempPro.filter(list => {
            return list.city === city;
          });
        }
        // filter by type
        if (type !== "الجميع") {
          tempPro = tempPro.filter(list => {
            return list.propType === type;
          });
        }
        // filter by space
        if (space !== 1) {
          tempPro = tempPro.filter(list => {
            return list.space <= space;
          });
        }
        // filter by price
        if (price !== 1) {
          tempPro = tempPro.filter(list => {
            return list.price <= price;
          });
        }

        commit("setFinlePro", tempPro);
      },
      resetForm({ state, commit }) {
        commit("setFinlePro", state.loadedPro);
        commit("changeCity", "الجميع");
        commit("changeType", "الجميع");
        commit("changeSpace", 1);
        commit("changePrice", 1);
      },
      setSinglePro({ commit }, payload) {
        commit("setSinglePro", payload);
      }
    },
    getters: {}
  });
};

export default createStore;
