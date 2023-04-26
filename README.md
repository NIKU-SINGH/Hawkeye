## Introduction

It provides users with a friendly interface, so one can keep track of important events and save themselves from many of the attack surfaces and at the same time know info about forked chains and trace transcations and addresses from different nodes.

### Frontend

![Image](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/463/161/datas/original.png)
![Image](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/463/160/datas/original.png)
![image](https://raw.githubusercontent.com/NIKU-SINGH/Hawkeye/main/public/images/design.jpeg)

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Web Sockets to share data bi-directionally in real-time.

### Backend

- Run few Bitcoin testnet or mainnet nodes, here we are running testnet.
  ![Image](https://raw.githubusercontent.com/NIKU-SINGH/Hawkeye/main/public/images/code2.jpeg)
- Create db and connect with forkscanner.
- Connect the nodes with forkscanner.
  ![Image](https://raw.githubusercontent.com/NIKU-SINGH/Hawkeye/main/public/images/code1.jpg)
- Resolve Errors if any.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
