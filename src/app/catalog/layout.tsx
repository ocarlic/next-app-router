import { ReactNode } from "react";

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
