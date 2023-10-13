import classNames from "classnames";

interface ILocationSummary {
  className?: string;
}

function LocationSummary({ className }: ILocationSummary) {
  return (
    <div className={classNames("flex justify-end", className)}>
      <p>Total: 7 files and 2 folders</p>
    </div>
  );
}

export default LocationSummary;
