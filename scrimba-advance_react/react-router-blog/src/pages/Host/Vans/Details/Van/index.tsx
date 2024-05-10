import { Outlet, useOutletContext } from "react-router-dom";
import { Button } from "../../../../../components/Button";
import { Span } from "../../../../../components/General/styles";
import { Van } from "../../../../../server/types";
import { Navbar } from "../../../components/Navbar";
import { ContextType } from "./types";
import {
  ContainerInfo,
  ContainerVan,
  Img,
  TextVanElement,
  VanBody,
  VanHead,
} from "./styles";

export default function VanInfo({ van }: { van: Van }) {
  const backgroundcolor =
    van?.type == "simple"
      ? "#E17654"
      : van?.type == "luxury"
      ? "#161616"
      : "#115E59";

  const hoverbackgroundcolor =
    van?.type == "simple"
      ? "#f5a187"
      : van?.type == "luxury"
      ? "#424242"
      : "#10756f";
  return (
    <ContainerVan>
      <VanHead>
        <Img src={van.imageUrl} alt="Van image" />
        <ContainerInfo>
          <Button
            text={
              van
                ? van.type.substring(0, 1).toUpperCase() +
                  van.type.substring(1, van.type.length)
                : ""
            }
            mediaheight="1.5rem"
            mediawidth="4.3rem"
            fontSize="1rem"
            backgroundcolor={backgroundcolor}
            hoverbackgroundcolor={hoverbackgroundcolor}
            color="#FFEAD0"
            width="6rem"
            margintop="0rem"
          ></Button>
          <TextVanElement>{van.name}</TextVanElement>
          <Span color="#161616" fontWeight={700} fontSize="1rem">
            ${van.price}/day
          </Span>
        </ContainerInfo>
      </VanHead>
      <VanBody>
        <Navbar
          largescreen={false}
          buttons={["Details", "Pricing", "Photos"]}
        />
        <Outlet context={{ van } satisfies ContextType} />
      </VanBody>
    </ContainerVan>
  );
}

export function useVan() {
  return useOutletContext<ContextType>();
}
