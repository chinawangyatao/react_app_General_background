import LoginStore from "@/store/login,Store.js";

class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
  }
}

//实例化根
//导出useStore context
const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);
export { useStore };
