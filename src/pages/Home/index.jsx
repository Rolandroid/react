import React from "react";
import DrinkDetailModal from "../../components/DrinkModal";
import SearchForm from "../../components/SerchForm";
import {DrinkList} from "../../components/DrinkList";

export default function Home() {
  return (
    <>
      <SearchForm />
      <DrinkList />
      <DrinkDetailModal />
    </>
  );
}
