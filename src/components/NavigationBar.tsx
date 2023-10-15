import classNames from "classnames";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import locationState from "../atoms/locationState";
import locationHistoryState from "../atoms/locationHistoryState";
import isEmpty from "lodash/isEmpty";
import searchState from "../atoms/searchState";

interface INavigationBar {
  className?: string;
}

function NavigationBar({ className }: INavigationBar) {
  const [location, setLocation] = useRecoilState(locationState);
  const [locationHistory, setLocationHistory] =
    useRecoilState(locationHistoryState);
  const [searchString, setSearchString] = useRecoilState(searchState);
  const searching = !isEmpty(searchString);

  const goToLocation = (toDepth: number) => {
    setLocation((l) => ({
      path: l.path.slice(0, toDepth + 1),
      reference: l.reference.slice(0, toDepth + 1),
    }));
    const isSameLocation = toDepth === location.path.length - 1;
    if (!isSameLocation) {
      setLocationHistory((lh) => [...lh, location]);
    }
    setSearchString("");
  };

  const goBack = () => {
    if (isEmpty(locationHistory)) return;
    setLocationHistory((lh) => lh.slice(0, lh.length - 1));
    setLocation(locationHistory[locationHistory.length - 1] || []);
  };

  return (
    <div className={classNames("flex justify-between", className)}>
      <div className="flex flex-row overflow-x-auto snap-x">
        {location.path
          .map((loc, i) => {
            return (
              <div className="snap-center">
                <Button
                  size="small"
                  sx={{ textTransform: "capitalize", color: "black" }}
                  onClick={() => goToLocation(i)}
                >
                  {loc}
                </Button>
              </div>
            );
          })
          .reduce((acc, l) =>
            acc == null ? (
              l
            ) : (
              <>
                {acc}/{l}
              </>
            )
          )}
      </div>
      <Button
        size="small"
        sx={{ textTransform: "capitalize", color: "black" }}
        onClick={goBack}
        disabled={isEmpty(locationHistory) || searching}
      >
        Back
      </Button>
    </div>
  );
}

export default NavigationBar;
