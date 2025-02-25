import Heading from "@/app/_ui/Heading";
import styles from "./style.module.css";
import RoomCard from "../RoomCard";
import { getAllRooms } from "@/app/_lib/supabase/rooms";

async function Rooms() {
  //   const rooms = await getAllRooms();
  //   rooms.length = 6;

  const rooms = [
    {
      id: 1,
      name: "Superior",
      price: 200,
      capacity: 2,
      thumbnail: "superior.jpg",
    },
    {
      id: 2,
      name: "Grand Suite",
      price: 150,
      capacity: 4,
      thumbnail: "grand_suite.jpg",
    },
    {
      id: 3,
      name: "Superior Queen",
      price: 100,
      capacity: 2,
      thumbnail: "superior_queen.jpg",
    },
    {
      id: 4,
      name: "Deluxe",
      price: 500,
      capacity: 6,
      thumbnail: "deluxe.jpg",
    },
    {
      id: 5,
      name: "Superior",
      price: 80,
      capacity: 1,
      thumbnail: "superior.jpg",
    },
  ];

  return (
    <section className={styles.roomsSection}>
      <div className="container">
        <Heading className="text-center">Our Rooms</Heading>
        <p className="text-center">
          "Experience space and comfort in stylishly contemporary guestrooms. Choose
          between rooms with queen twin beds ideal for company retreats or luxuriously
          appointed extra large rooms for romantic weekend get aways. Alternatively opt
          for a family suite with direct lagoon pool access perfect for family breaks."
        </p>
        <div className={styles.roomsGrid}>
          {rooms.map((item, index) => (
            <RoomCard key={index} room={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
