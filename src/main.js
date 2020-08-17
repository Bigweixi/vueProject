import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  PullRefresh,
  Card,
  Button,
  Tag,
  NavBar,
  TreeSelect,
  Cell,
  CellGroup,
  Icon,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton

} from 'vant'

Vue.config.productionTip = false


Vue.use(Tag);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(Card);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(TreeSelect);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon)
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
