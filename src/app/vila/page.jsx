import styles from "./styles.module.css";
import Banner from "../_components/Banner";
import RoomsSection from "../rooms/_components/RoomsSection";
import { Suspense } from "react";
import Loader from "../_ui/Loader";

export const metadata = {
  title: "Vila",
  description: "Discover and book a room at the Hotel Booking App ",
};

function Vila({ searchParams }) {
  const filter = searchParams?.sort ?? "default";
  const range = searchParams?.range ?? "";
  return (
    <>
      <Banner title={"WHERE WILL YOU SLEEP TONIGHT?"} />

      <div className={`container ${styles.roomsHolder}`}>
        {/* <FilterSection filters={{ filter, range }} /> */}

        <Suspense
          key={`${filter}-${range}`}
          fallback={
            <div className={styles.loader}>
              <Loader />
            </div>
          }
        >
          <RoomsSection filter={filter} range={range} />
        </Suspense>
      </div>
    </>
  );
}

export default Vila;
