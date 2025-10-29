import { ToastBody } from "../components/toast/ToastBody";
import { ToastRoot } from "../components/toast/ToastRoot";
import { ToastTrigger } from "../components/toast/ToastTrigger";
import styles from "./Page.module.css";

export function ToastPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Toast</h2>
          <div className={styles.componentGroup}>
            <ToastRoot>
              <ToastTrigger asChild>
                <button style={{ color: "black" }}>Create Toast</button>
              </ToastTrigger>
              <ToastBody title="Testing" description="testing"></ToastBody>
            </ToastRoot>
            <ToastRoot>
              <ToastTrigger asChild>
                <button style={{ color: "black" }}>Create Toast</button>
              </ToastTrigger>
              <ToastBody title="Testing" description="testing"></ToastBody>
            </ToastRoot>
            <ToastRoot>
              <ToastTrigger asChild>
                <button style={{ color: "black" }}>Create Toast</button>
              </ToastTrigger>
              <ToastBody title="Testing" description="testing"></ToastBody>
            </ToastRoot>
          </div>
        </section>
      </div>
    </div>
  );
}
