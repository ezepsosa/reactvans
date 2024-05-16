import { useEffect, useState } from "react";
import { getHostReviews } from "../../../components/api";
import { Review } from "../../../server/types";
import { ShowLoading } from "../../../components/Loading";
import { ReviewElement } from "./ReviewElement";
import { OverallComponent } from "./OverallComponent";
export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await getHostReviews();
        setReviews(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  if (loading) {
    return <ShowLoading />;
  } else {
    return (
      <div>
        <OverallComponent reviews={reviews!} />
        {reviews?.map((element) => (
          <ReviewElement
            date={element.date}
            name={element.name}
            stars={element.stars}
            text={element.text}
          />
        ))}
      </div>
    );
  }
}
