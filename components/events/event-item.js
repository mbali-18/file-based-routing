import Link from "next/link";

import classes from "./event-item.module.css";

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
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>TITLE</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}> Explore Event </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
