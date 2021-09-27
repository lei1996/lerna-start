# lerna-start

Lerna Start server and client

## Hot to run

1. Install dependency. `yarn install`
2. Run development server. `yarn dev:server`
3. Open `http://localhost:7777` to view server response
4. Run development client. `yarn dev:client`,
5. Open `http://localhost:8080` to view client page

## Avaliable Scripts

- `yarn dev:server` start dev server
- `yarn start:server` start prod server
- `yarn dev:client` start dev client
- `yarn build:client` build prod client
- `npx lerna add [--scope xxx] [--dev] yyy` 为 scope=xxx 包添加 dev 依赖 yyy, 不加 scope 则给所有包添加依赖, 不加 dev 则添加非 dev 依赖

windows 需要用 docker Desktop 中的 Dev Environments. (因为windows的文件系统与linux/unix 的不同，yarn install 会报错)
    1. 选择create - Remote git repository - git url
    2. 等待创建完毕, 然后 open in vscode.

之后就可以开心的开发了.
