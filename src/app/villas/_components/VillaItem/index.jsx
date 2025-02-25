import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function VillaItem({ id, imgPath, price, title }) {
  return (
    <div className={styles.villaGrid}>
      <div className={styles.villaItem}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt="" />
        </div>
        <div className={styles.villaDescription}>
          <div>
            <h2 className={styles.villaTitle}>{title}</h2>
            <Link href={`villas/${id}`}>
              From Rp{price.toLocaleString("id-ID")} / Night
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VillaItem;
