import classNames from "classnames";

interface INavigationBar {
  className?: string;
}

function NavigationBar({ className }: INavigationBar) {
  return (
    <div className={classNames("flex justify-between", className)}>
      <p>Home / Folder X / Folder Y</p>
      <p>Back</p>
    </div>
  );
}

export default NavigationBar;
