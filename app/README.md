## 🏗️ Сборка

```bash
git clone https://github.com/rudolf101/RISCify.git && cd RISCify/app
npm i
npm run build
```

## 🚀 Запуск

### Локально
```bash
npm run build
```

### На своём сервере

```bash
PUBLIC_URL=https://your.server.com/path/ npm run build
```

После чего скопируйте файлы из папки `app/build` на сервер

### GitHub Pages

Смотрите в файл `.github/workflows/deploy.yml`. При необходимости замените `DEPLOY_TOKEN` на `GITHUB_TOKEN`

### Добавление новых инструкций

После редактирования `.yml`-файлов с описанием инструкций запустите в корне проекта

```bash
npx tsx app/src/generator/run.ts
```

После чего вы должны увидеть новые инструкции в файле `app/src/kernel/Description.generated.ts`
