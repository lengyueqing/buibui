import MOCK from 'mockjs'
import trye from "./trye.json"
import title from "./title.json"
import test from "./test.json"
import smmile from "./smmile.json"


MOCK.mock("/mock/banners", "get", {
  code: 200,
  // 当随机数据只有一条时，就不在是数组，而是对象
  // "data|1": {banners},
  // 当随机数据有多条时，才是数组
  "data": trye,
});

MOCK.mock("/mock/nav", "get", {
  code: 200,
  "data": title,
});

MOCK.mock("/mock/test", "get", {
  code: 200,
  "data": test,
});
MOCK.mock("/mock/smmile", "get", {
  code: 200,
  "data": smmile,
});