import type { Metadata } from 'next';
import SignupClient from './SignupClient';

export const metadata: Metadata = {
  title: 'Sign Up - AI Freelancer OS',
  description: 'Create your account',
};

export default function Page() {
  return <SignupClient />;
}