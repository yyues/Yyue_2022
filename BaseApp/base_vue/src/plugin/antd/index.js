import { Button, message, Layout, Menu, Input, Form } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const components = [Button, Layout, Menu, Input, Form];
export function setupAntd(app) {
  components.forEach((plugin) => {
    app.use(plugin);
  });
  app.config.globalProperties.$message = message;
}
