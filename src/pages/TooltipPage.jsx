import { InfoIcon } from "lucide-react";
import { TooltipBody } from "../components/tooltip/TooltipBody";
import { TooltipRoot } from "../components/tooltip/TooltipRoot";
import { TooltipTrigger } from "../components/tooltip/TooltipTrigger";
import { cn } from "../utilities/cn";
import styles from "./Page.module.css";

export function TooltipPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Tooltip</h2>
        <div className={styles.componentGroup}>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            />
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              color="blue"
            />
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              color="pink"
            />
          </TooltipRoot>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              color="green"
            />
          </TooltipRoot>
        </div>
        <div className={cn(styles.componentGroup, styles.tooltipDemo)}>
          <TooltipRoot persistent={true}>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              variant="light"
            />
          </TooltipRoot>
          <TooltipRoot persistent={true}>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              variant="light"
              color="blue"
            />
          </TooltipRoot>
          <TooltipRoot persistent={true}>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              variant="light"
              color="pink"
            />
          </TooltipRoot>
          <TooltipRoot persistent={true}>
            <TooltipTrigger asChild>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipBody
              title="Archive Notes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
              variant="light"
              color="green"
            />
          </TooltipRoot>
        </div>
        </section>
      </div>
    </div>
  );
}

