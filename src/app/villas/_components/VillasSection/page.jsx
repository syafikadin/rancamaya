import styles from "./styles.module.css";
import VillaItem from "../VillaItem";

async function VillasSection({ filter, range }) {
  const villas = [
    {
      id: 1,
      name: "One Bedroom",
      price: 300000,
      capacity: 4,
      thumbnail: "one_bedroom.jpg",
    },
    {
      id: 2,
      name: "Two Bedroom",
      price: 250000,
      capacity: 2,
      thumbnail: "two_bedroom.png",
    },
    {
      id: 3,
      name: "Two Bedroom Pool",
      price: 500000,
      capacity: 6,
      thumbnail: "two_bedroom_pool.jpg",
    },
    {
      id: 4,
      name: "Two Bedroom Jacuzzi",
      price: 400000,
      capacity: 5,
      thumbnail: "two_bedroom_jacuzzi.jpeg",
    },
    {
      id: 5,
      name: "Private Pool Villa",
      price: 600000,
      capacity: 8,
      thumbnail: "superior_queen.jpg",
    },
  ];

  let filteredVillas = villas;

  if (
    range &&
    isValid(new Date(range.split("_")?.at(0))) &&
    isValid(new Date(range.split("_")?.at(1)))
  ) {
    const arrivalDate = range.split("_")?.at(0);
    const departureDate = range.split("_")?.at(1);
    filteredVillas = villas.filter((villa) => {
      // Check if any of the available dates overlap with the arrival and departure dates
      return villa.availableDates.some((date) => {
        const villaDate = new Date(date);
        return villaDate >= arrivalDate && villaDate <= departureDate;
      });
    });
  }

  switch (filter) {
    case "high-price":
      filteredVillas = filteredVillas.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredVillas = filteredVillas.sort((a, b) => a.price - b.price);
      break;

    case "min-guests":
      filteredVillas = filteredVillas.sort((a, b) => b.capacity - a.capacity);
      break;

    case "max-guests":
      filteredVillas = filteredVillas.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredVillas = filteredVillas;
  }

  return (
    <div className={styles.villasGrid}>
      {filteredVillas.map((item) => (
        <VillaItem
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          imgPath={item.thumbnail}
          link="#"
        />
      ))}
    </div>
  );
}

export default VillasSection;
