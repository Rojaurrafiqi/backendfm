FROM node:14

WORKDIR /prisma

COPY prisma/package.json .
COPY prisma/package-lock.json .

RUN npm install

COPY prisma .

CMD ["npm", "start"]
