FROM node:20-alpine AS deps

WORKDIR /quik-client
COPY package.json ./



FROM node:20-alpine AS builder
WORKDIR /quik-client
COPY --from=deps /quik-client/node_modules ./node_modules
COPY . .
RUN npm run build


FROM node:20-alpine AS runner
WORKDIR /quik-client

COPY --from=builder /quik-client/public ./public
COPY --from=builder /quik-client/.next ./.next
COPY --from=builder /quik-client/node_modules ./node_modules
COPY --from=builder /quik-client/package.json ./package.json

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]