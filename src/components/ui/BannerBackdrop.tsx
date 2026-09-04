import type { ReactElement } from "react";
import StarsField from "@/components/ui/StarsField";

type BannerBackdropProps = {
  poster?: string;
  video?: string;
  position?: string;
  veil?: boolean;
  overlay?: "hero" | "room";
  quiet?: boolean;
  priority?: boolean;
  delaySec?: number;
};

/** Navy star field for inner-page banners. No video, no Ken Burns. */
export default function BannerBackdrop(_props: BannerBackdropProps): ReactElement {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0B3D38]">
      <StarsField className="absolute inset-0" />
    </div>
  );
}
