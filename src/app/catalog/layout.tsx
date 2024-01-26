import { ReactNode } from "react";

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-xl text-bold">Header</h1>
      <div>{children}</div>
    </div>
  );
}
