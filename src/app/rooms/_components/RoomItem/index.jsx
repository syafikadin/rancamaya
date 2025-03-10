import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function RoomItem({ id, imgPath, price, title }) {
  return (
    <div className={styles.roomsGrid}>
      <div className={styles.roomItem}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt="" />
          {/* <Image fill src="/room2.jpg" alt="" /> */}
        </div>
        <div className={styles.roomDescription}>
          <div>
            <h2 className={styles.roomTitle}>{title}</h2>
            <Link href={`rooms/${id}`}>
              From Rp{price.toLocaleString("id-ID")} / Night
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomItem;
