import styles from "@/styles/app.module.scss";
import { Header } from "@/components/Header";
import { Polaroid } from "@/components/Polaroid";
import { Resume } from "@/components/Resume";

export default function Page() {
  return (
    <main className={styles.main}>
      
      <div className={styles.body}>
        <div className={styles.section}>
          <Header />
          <div className={styles.columnsContainer}>
            <div className={styles.columnLeft}>
              <div className={styles.introHead}>Hi, I'm Max</div>
              <div className={styles.introSub}>
                software engineer / reader / hiker / amateur baker
              </div>
            </div>
            <div className={styles.columnRight}>
              <Polaroid />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <Resume />
        </div>
      </div>
    </main>
  );
}
