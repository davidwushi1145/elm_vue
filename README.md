# elm_vue
基于Vue3的饿了么前端页面。
这是一个使用 Vue 3 构建的前端项目。([后端仓库](https://github.com/davidwushi1145/elm_SpringBoot))项目采用了 Vue Router 和 Element Plus，专注于提供一个现代化、响应式的用户界面。
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 项目结构

```
elm_vue
├── dist                  # 编译后的文件
├── public                # 公共资源
├── src                   # 源代码
│   ├── assets            # 静态资源
│   ├── components        # Vue 组件
│   ├── views             # 页面视图
│   ├── authService.ts    # 认证服务
│   ├── main.ts           # 入口文件
│   └── router            # 路由配置
├── index.html            # HTML 入口文件
└── package.json          # 项目配置
```

## 技术栈

- Vue 3
- Vue Router
- Element Plus
- Axios
- Tailwind CSS

## 安装与运行

克隆仓库到本地：

```bash
git clone 
```

安装依赖：

```bash
cd elm_vue
npm install
```

启动开发服务器：

```bash
npm run dev
```

## 构建与部署

构建项目：

```bash
npm run build
```

构建后的文件将位于 `dist/` 目录。

## 贡献

欢迎贡献代码，请遵循现有代码风格并通过单元测试。

