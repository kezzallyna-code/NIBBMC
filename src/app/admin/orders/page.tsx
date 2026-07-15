import OrdersClient from "./OrdersClient";
import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();
  
  const { data: rawOrders } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  // Map database orders to the format expected by the client
  const mappedOrders = (rawOrders || []).map(o => ({
    id: o.id,
    order_number: o.order_number,
    customer: o.full_name,
    phone: o.phone,
    wilaya: o.wilaya,
    commune: o.commune,
    address: o.address,
    delivery: o.delivery_method,
    payment: o.payment_method,
    status: o.status || 'Pending',
    total: o.total_da,
    tracking: o.tracking_number || '-',
  }));

  return <OrdersClient initialOrders={mappedOrders} />;
}

