import { AspectRatio } from "@rempi-ui/aspect-ratio";
import { FC } from "react";

export const AspectRatioPreview: FC = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <img
        className="img-aspect-ratio"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio>
  );
};