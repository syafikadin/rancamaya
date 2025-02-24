import Image from "next/image";
import styles from "./styles.module.css";
import Card from "../Card";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function RoomCard({ room }) {
  return (
    <Card>
      <Card.Thumbnail>
        {/* <Image fill src={`${SUPABASE_ROOMS_URL}/${room.thumbnail}`} alt="" /> */}
        <Image fill src="/superior.jpg" alt="room" />
      </Card.Thumbnail>

      <Card.Description className={styles.roomDescription}>
        {/* <h2>{room.name}</h2> */}
        <h2>Superior</h2>

        <p>
          Relax in exquisite, contemporary style 34-sqm room featuring two 160 x 200 queen
          beds, Superior rooms are invitingly cozy. Sip your morning tea or coffee on the
          balcony, before stepping under the rain shower to get ready for a day in
          paradise. Come back for an afternoon snooze, or laze in bed and watch a movie.
          Keeping in touch with friends and family back home is easy with free Wi-Fi, and
          a comfy bed with the perfect room temperature promises a good night`s sleep, so
          you`ll wake up feeling totally refreshed
        </p>
      </Card.Description>
    </Card>
  );
}

export default RoomCard;
