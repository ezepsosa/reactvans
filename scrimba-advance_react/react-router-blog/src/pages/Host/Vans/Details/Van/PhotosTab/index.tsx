import { useVan } from "..";
import { Img } from "./styles";

export function PhotosTabHostVan() {
  const { van } = useVan();
  return <Img src={van.imageUrl} />;
}
