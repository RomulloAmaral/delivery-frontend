"use client";
import DashboardService from "@/services/DashboardService";
import { DashboardProps } from "@/services/DashboardService/types";
import { useEffect, useState } from "react";

export default function Home() {
  const numero = 42; 
  const [numeroVar, setNumeroVar] = useState(0);
  const [dashboard, setDashboard] = useState<DashboardProps|null>(null);



  const alterarNumeroVar = () =>{
    setNumeroVar(numeroVar + 1);
  }

  const carregarDashboard = async () => {
    const dashboardData = await DashboardService.getDashboardData();
    setDashboard(dashboardData);
  }
  useEffect(() => {
    carregarDashboard();
  }, []);


  return (
    <div>
      <h1>Welcome to the Delivery Frontend!</h1>
      <p>o numero é {numero}</p>
      <p>numeroVar é {numeroVar}</p>
      <button onClick={alterarNumeroVar} style={{backgroundColor:"blue"}}>alterar o número var</button>
      <p>Pedidos Realizados:{dashboard?.pedidos}</p>
      <p>Entregas:{dashboard?.entregas}</p>
      <p>Vendas Realizadas:{dashboard?.vendasRealizadas}</p>
      <p>Vendas Canceladas:{dashboard?.vendasCanceladas}</p>
    </div>
  );

}
