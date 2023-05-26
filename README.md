Enter the destination and get the top places to visit. This application is an example of using architecture [`feature-sliced`](https://feature-sliced.design/) and [`chatGPT`](https://platform.openai.com/docs/introduction). To see the project, follow the [link](https://travel-planner-mu.vercel.app/login). This project is a simple code demonstration.

## Getting Started

First create .env.development with env variables.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## ENV

OPENAI_API_KEY - key for ChatGPT

GOOGLE_CLIENT_ID - id for google credentials(https://developers.google.com/identity/protocols/oauth2)

GOOGLE_CLIENT_SECRET - secret for google credentials

NEXTAUTH_SECRET - secret for next auth plugin(for production only)

