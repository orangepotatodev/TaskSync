# Authentication Pages

This is a simple Next.js application with authentication pages using Clerk.

## Pages

- **Landing Page**: A welcome page with links to sign in and sign up
- **Sign In Page**: Authentication using Clerk
- **Sign Up Page**: Registration using Clerk 
- **Forgot Password**: Accessible via link from the landing page
- **Email Verification**: Handled by Clerk during the sign up process

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

- Next.js
- Clerk for authentication
- Tailwind CSS for styling 