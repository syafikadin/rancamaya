// import { filterRoomsByDate, getAllRooms } from "@/app/_lib/supabase/rooms";
import styles from "./styles.module.css";
import RoomItem from "../RoomItem";
import { isValid } from "date-fns";

async function RoomsSection({ filter, range }) {
  // const rooms = await getAllRooms();
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: 200,
      capacity: 2,
      // thumbnail: "deluxe-suite.jpg",
    },
    {
      id: 2,
      name: "Family Room",
      price: 150,
      capacity: 4,
      // thumbnail: "family-room.jpg",
    },
    {
      id: 3,
      name: "Standard Room",
      price: 100,
      capacity: 2,
      // thumbnail: "standard-room.jpg",
    },
    {
      id: 4,
      name: "Luxury Penthouse",
      price: 500,
      capacity: 6,
      // thumbnail: "luxury-penthouse.jpg",
    },
    {
      id: 5,
      name: "Economy Single",
      price: 80,
      capacity: 1,
      // thumbnail: "economy-single.jpg",
    },
  ];
  // console.log({ rooms: rooms.length });

  // let filteredRooms = await filterRoomsByDate();

  let filteredRooms = rooms;

  if (
    range &&
    isValid(new Date(range.split("_")?.at(0))) &&
    isValid(new Date(range.split("_")?.at(1)))
  ) {
    const arrivalDate = range.split("_")?.at(0);
    const departureDate = range.split("_")?.at(1);
    filteredRooms = await filterRoomsByDate(arrivalDate, departureDate);
  }

  switch (filter) {
    case "high-price":
      filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
      break;

    case "min-guests":
      filteredRooms = filteredRooms.sort((a, b) => b.capacity - a.capacity);
      break;

    case "max-guests":
      filteredRooms = filteredRooms.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredRooms = filteredRooms;
  }

  return (
    <div className={styles.roomsGrid}>
      {filteredRooms.map((item) => (
        <RoomItem
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          // imgPath={item.thumbnail}
          link="#"
        />
      ))}
    </div>
  );
}

export default RoomsSection;
