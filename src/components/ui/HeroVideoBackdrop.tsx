import type { ReactElement } from "react";
import StarsField from "@/components/ui/StarsField";

type HeroVideoBackdropProps = {
  ready?: boolean;
};

export default function HeroVideoBackdrop(
  _props: HeroVideoBackdropProps,
): ReactElement {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0B3D38]">
      <StarsField className="absolute inset-0" />
    </div>
  );
}
