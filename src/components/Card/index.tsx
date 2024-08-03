"use client";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import { CardComponent } from "./card";

const CardWrapper = () => {
  return (
    <Provider store={store}>
      <CardComponent />
    </Provider>
  );
};

export default CardWrapper;
