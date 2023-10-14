import SearchTextInput from "./components/SearchTextInput";
import NavigationBar from "./components/NavigationBar";
import LocationSummary from "./components/LocationSummary";
import ActionBar from "./components/ActionBar";
import Explorer from "./components/Explorer";

function App() {
  return (
    <div className="flex items-center justify-center bg-gray-300">
      <div className="bg-white max-w-[720px] w-full p-5">
        <SearchTextInput className="mb-4" />
        <ActionBar className="mb-3" />
        <NavigationBar className="mb-3" />
        <Explorer className="mb-4" />
        <LocationSummary className="mb-4" />
      </div>
    </div>
  );
}

export default App;
