FROM node:18-alpine
WORKDIR /taste-it
ENV PATH ="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
