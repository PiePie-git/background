import { Suspense, lazy } from "react";

const loadPage = (id) => {
  const Page = lazy(() => import(/* @vite-ignore */ `../pages/${id}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
};

export default loadPage;
