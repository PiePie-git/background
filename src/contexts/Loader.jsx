import React, { useContext } from "react";
import { PageState } from "@contexts";

const Loader = (props) => {
  const pageState = useContext(PageState);
  const { status } = pageState;
  if (status === "finish") {
    return <>{props.children}</>;
  } else return <></>;
};
export default Loader;
