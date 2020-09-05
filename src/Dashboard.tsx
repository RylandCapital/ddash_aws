import React from "react";
import { SignalData } from "./panels/ContractHistoryEnterprise";
import { TVChartContainer } from './components/TVChartContainer/index';



export default function Dashboard() {
  return (
    <div className="panels" >
      <div >
        <TVChartContainer />
      </div>
      <div >
        <SignalData />
      </div>
    </div>
  )
}