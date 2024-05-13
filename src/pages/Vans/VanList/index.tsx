import { useEffect, useState } from "react";
import { Filter } from "../../../components/Filter";
import { Headline } from "../../../components/General/styles";
import { Container, VansContainer } from "./style";
import { VanCard } from "./VanCard/index";
import { Van } from "../../../server/types";
import { useSearchParams } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";

export default function VansList() {
  const [vans, setVans] = useState<Van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const typeSearch = searchParams.get("type");
    console.log(typeSearch);
    fetch(`/api/vans?type=${typeSearch ? typeSearch : ""}`)
      .then((res) => res.json())
      .then((res) => setVans(res.vans));
  }, [searchParams]);
  return (
    <Container>
      <Headline>Explore our van options</Headline>
      <Filter
        setSearchParams={setSearchParams}
        filters={["Simple", "Luxury", "Rugged"]}
      />
      <VansContainer>
        {vans.map((van) => (
          <VanCard
            imgUrl={van.imageUrl}
            price={van.price}
            title={van.name}
            type={van.type}
            key={van.id}
            id={van.id}
          ></VanCard>
        ))}
      </VansContainer>
    </Container>
  );
}
