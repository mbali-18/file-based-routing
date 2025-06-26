import Link from "next/link";
// import styles from "./event-item.module.css";

function EventItem(props) {
  const { title, image, location, id } = props;

  const humanReadableDate = new Date(2020).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}> Explore Event </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
