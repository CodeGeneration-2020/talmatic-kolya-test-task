import { ReactNode } from "react";

export interface ICollapseTransitionWrapper {
  condition: boolean;
  className?: string;
  children?: ReactNode;
}
