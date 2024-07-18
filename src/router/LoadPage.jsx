import { Suspense, lazy } from "react";

const pages = import.meta.glob("../pages/*.jsx");

const loadPage = (id) => {
  const PageComponent = lazy(pages[`../pages/${id}.jsx`]);
  if (!PageComponent) {
    return <div>Page not found</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
};

export default loadPage;
