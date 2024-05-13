import { useEffect, useState } from "react";
import { Filter } from "../../../components/Filter";
import { Headline } from "../../../components/General/styles";
import { Container, VansContainer } from "./style";
import { VanCard } from "./VanCard/index";
import { Van } from "../../../server/types";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getVans } from "../../../components/api";

export default function VansList() {
  const previousfilter = useLocation().state;
  const [vans, setVans] = useState<Van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams(
    previousfilter ? previousfilter : ""
  );
  useEffect(() => {
    const typeSearch = searchParams.get("type");
    async function loadVans() {
      const data = await getVans(typeSearch ? typeSearch : "");
      setVans(data);
    }
    loadVans();
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
          <Link
            state={searchParams.toString()}
            style={{ textDecoration: "none" }}
            to={`/vans/${van.id}`}
            key={van.id}
          >
            <VanCard
              imgUrl={van.imageUrl}
              price={van.price}
              title={van.name}
              type={van.type}
              key={van.id}
              id={van.id}
            ></VanCard>
          </Link>
        ))}
      </VansContainer>
    </Container>
  );
}
