import FilterSection from "./_components/FilterSection";

import styles from "./styles.module.css";
import Banner from "../_components/Banner";
import VillasSection from "./_components/VillasSection/page";
import { Suspense } from "react";
import Loader from "../_ui/Loader";

export const metadata = {
  title: "Villas",
  description: "Discover and book a room at the Hotel Booking App ",
};

function Villas({ searchParams }) {
  const filter = searchParams?.sort ?? "default";
  const range = searchParams?.range ?? "";
  return (
    <>
      <Banner title={"WHERE WILL YOU SLEEP TONIGHT?"} />

      <div className={`container ${styles.villaHolder}`}>
        <FilterSection filters={{ filter, range }} />

        <Suspense
          key={`${filter}-${range}`}
          fallback={
            <div className={styles.loader}>
              <Loader />
            </div>
          }
        >
          <VillasSection filter={filter} range={range} />
        </Suspense>
      </div>
    </>
  );
}

export default Villas;
