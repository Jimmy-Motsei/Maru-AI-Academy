# optional
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* package-lock.json* ./
RUN npm i --omit=dev || true
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node","dist/index.js"]
