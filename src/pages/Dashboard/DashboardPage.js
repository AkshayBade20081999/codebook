import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services/";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");
  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrder();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true });
      }
    }
    fetchOrders();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>
      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
