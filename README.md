# Next.js SSO Project

This is a Next.js project that implements Single Sign-On (SSO) using Auth0 and NextAuth.js.

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd my_sso_app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in the values with your Auth0 credentials

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The following environment variables are required:

- `AUTH0_CLIENT_ID`: Your Auth0 application client ID
- `AUTH0_CLIENT_SECRET`: Your Auth0 application client secret
- `AUTH0_ISSUER`: Your Auth0 domain URL
- `NEXTAUTH_URL`: The base URL of your application
- `NEXTAUTH_SECRET`: A random string used to hash tokens

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Auth0](https://auth0.com/) - Identity provider
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Updating the Repository

To send updates to your GitHub repository:

1. Stage your changes:
```bash
git add .
```

2. Commit your changes with a descriptive message:
```bash
git commit -m "Your commit message describing the changes"
```

3. Push your changes to GitHub:
```bash
git push origin main
```

To check your changes before committing:
```bash
# See what files have changed
git status

# See the actual changes in the files
git diff
```

To update your local repository with changes from GitHub:
```bash
git pull origin main
```

## Deploying to Vercel

1. Push your code to GitHub

2. Connect your GitHub repository to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository and branch
   - Click "Deploy"

3. Configure Environment Variables in Vercel:
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add the following variables:
     ```
     AUTH0_CLIENT_ID=your_auth0_client_id
     AUTH0_CLIENT_SECRET=your_auth0_client_secret
     AUTH0_ISSUER=your_auth0_issuer_url
     NEXTAUTH_URL=https://your-app-name.vercel.app
     NEXTAUTH_SECRET=your_nextauth_secret
     ```

4. Configure Auth0 Application Settings:
   - Go to your Auth0 dashboard
   - Navigate to Applications > Your Application
   - Add these URLs to your application settings:

     Allowed Callback URLs:
     ```
     https://your-app-name.vercel.app/api/auth/callback/auth0
     http://localhost:3000/api/auth/callback/auth0
     ```

     Allowed Logout URLs:
     ```
     https://your-app-name.vercel.app
     http://localhost:3000
     ```

     Allowed Web Origins:
     ```
     https://your-app-name.vercel.app
     http://localhost:3000
     ```

   Replace `your-app-name.vercel.app` with your actual Vercel deployment URL.

5. Redeploy your application:
   - Go to your Vercel dashboard
   - Click "Redeploy" on your project

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
