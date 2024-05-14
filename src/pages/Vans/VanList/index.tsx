import { useEffect, useState } from "react";
import { Filter } from "../../../components/Filter";
import { Headline } from "../../../components/General/styles";
import { Container, VansContainer } from "./style";
import { VanCard } from "./VanCard/index";
import { Van } from "../../../server/types";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getVans } from "../../../components/api";
import { ShowError } from "../../../components/ShowError";
import { ShowLoading } from "../../../components/Loading";

export default function VansList() {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const previousfilter = useLocation().state;
  const [searchParams, setSearchParams] = useSearchParams(
    previousfilter ? previousfilter : ""
  );
  useEffect(() => {
    const typeSearch = searchParams.get("type");
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(typeSearch ? typeSearch : "");
        setVans(data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [searchParams]);

  if (error) {
    return ShowError();
  }
  if (loading) {
    return ShowLoading();
  }
  return (
    <Container>
      <Headline>Explore our van options</Headline>
      <Filter
        setSearchParams={setSearchParams}
        filters={["Simple", "Luxury", "Rugged"]}
      />
      {!loading ? (
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
      ) : null}
    </Container>
  );
}
