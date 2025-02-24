import Image from "next/image";
import styles from "./styles.module.css";
import Card from "../Card";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function RoomCard({ room }) {
  return (
    <Card>
      <Card.Thumbnail>
        {/* <Image fill src={`${SUPABASE_ROOMS_URL}/${room.thumbnail}`} alt="" /> */}
        <Image fill src="/room1.jpg" alt="room" />
      </Card.Thumbnail>

      <Card.Description className={styles.roomDescription}>
        {/* <h2>{room.name}</h2> */}
        <h2>Exclusive Room</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptates amet atque.</p>
      </Card.Description>
    </Card>
  );
}

export default RoomCard;
