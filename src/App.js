import React from "react";
import { DataProvider } from "./DataContext";
import "./App.css";

import Map from "./components/Map";
import Slice from "./components/Slice";
import Filter from "./components/Filter";
import Splice from "./components/Splice";
import Concat from "./components/Concat";
import Sort from "./components/Sort";
import From from "./components/From";
import IsArray from "./components/IsArray";
import Of from "./components/Of";
import CopyWithin from "./components/CopyWithin";
import Entries from "./components/Entries";
import Every from "./components/Every";
import Fill from "./components/Fill";
import Find from "./components/Find";
import FindIndex from "./components/FindIndex";
import Flat from "./components/Flat";
import Flatmap from "./components/Flatmap";
import ForEach from "./components/ForEach";
import Includes from "./components/Includes";
import IndexOf from "./components/IndexOf";
import Join from "./components/Join";
import Keys from "./components/Keys";
import LastIndexOf from "./components/LastIndexOf";
import Pop from "./components/Pop";
import Push from "./components/Push";
import Reduce from "./components/Reduce";
import Reverse from "./components/Reverse";

const App = () => {
  return (
    <DataProvider>
      <main className="app">
        <div className="page">
          <Concat />
          <CopyWithin />
          <Entries />
          <Every />
          <Fill />
          <Filter />
          <Find />
          <FindIndex />
          <Flat />
          <Flatmap />
          <ForEach />
          <From />
          <Includes />
          <IndexOf />
          <IsArray />
          <Join />
          <Keys />
          <LastIndexOf />
          <Map />
          <Of />
          <Pop />
          <Push />
          <Reduce />
          <Reverse />
          <Slice />
          <Sort />
          <Splice />
        </div>
      </main>
    </DataProvider>
  );
};

export default App;
