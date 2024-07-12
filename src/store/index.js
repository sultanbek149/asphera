import { createStore } from "vuex";
import { docsModule } from "@/store/docsModule";
import VuexPersistence from 'vuex-persist';

// Create an instance of VuexPersistence
const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // Specify the storage system
  modules: ['docs'] // Name the module you want to persist
});

// Create and export the Vuex store
export default createStore({
  modules: {
    docs: docsModule
  },
  // Register the VuexPersistence plugin
  plugins: [vuexLocal.plugin]
});

