import type { MetaFunction } from '@remix-run/react';
import NotFound from '~/core/components/not-found';

export const meta: MetaFunction = () => {
  return [{ title: 'Very cool app | Home' }];
};

function NotFoundPage() {
  return <NotFound />;
}

export default NotFoundPage;
