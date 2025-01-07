FROM node:18

COPY package.json ./
COPY src ./src
COPY dist ./dist
COPY tsconfig.json ./tsconfig.json

RUN npm install
RUN npm run compile 

#CMD ["node", "dist/", "run-tsc"]

CMD ["npm", "run", "run-node"]
