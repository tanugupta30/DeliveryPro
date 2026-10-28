const initialData = {
  orders: [
    { id: "DP-2401", customer: "Olivia Rhye", restaurant: "The Green Fork", items: "Avocado bowl, iced tea", total: 24.5, status: "Out for Delivery", partner: "Jordan Lee", time: "10:42 AM", address: "14 Park Street, Mumbai", payment: "Credit Card" },
    { id: "DP-2400", customer: "Phoenix Baker", restaurant: "Pasta & Co.", items: "Truffle pasta, lemonade", total: 32.0, status: "Preparing", partner: "", time: "10:38 AM", address: "88 Linking Road, Mumbai", payment: "UPI" },
    { id: "DP-2399", customer: "Lana Steiner", restaurant: "Burger Social", items: "Classic cheeseburger", total: 18.75, status: "Pending", partner: "", time: "10:31 AM", address: "7 Hill Road, Mumbai", payment: "Cash on Delivery" },
    { id: "DP-2398", customer: "Demi Wilkinson", restaurant: "The Green Fork", items: "Harvest salad, cold brew", total: 21.25, status: "Delivered", partner: "Sam Rivera", time: "10:19 AM", address: "32 Carter Road, Mumbai", payment: "UPI" },
    { id: "DP-2397", customer: "Candice Wu", restaurant: "Sushi House", items: "Salmon roll, miso soup", total: 28.5, status: "Delivered", partner: "Taylor Kim", time: "10:12 AM", address: "2 Bandra West, Mumbai", payment: "Credit Card" },
    { id: "DP-2396", customer: "Natali Craig", restaurant: "Pasta & Co.", items: "Pesto gnocchi", total: 19.0, status: "Cancelled", partner: "", time: "9:56 AM", address: "45 Worli, Mumbai", payment: "Net Banking" }
  ],
  restaurants: [
    { id: "RST-01", name: "The Green Fork", cuisine: "Healthy · Bowls", location: "Bandra West", contact: "+91 98765 43210", rating: 4.9, is_open: "Open" },
    { id: "RST-02", name: "Pasta & Co.", cuisine: "Italian · Pasta", location: "Lower Parel", contact: "+91 98765 43211", rating: 4.7, is_open: "Open" },
    { id: "RST-03", name: "Burger Social", cuisine: "American · Burgers", location: "Hill Road", contact: "+91 98765 43212", rating: 4.6, is_open: "Open" },
    { id: "RST-04", name: "Sushi House", cuisine: "Japanese · Sushi", location: "BKC", contact: "+91 98765 43213", rating: 4.8, is_open: "Closed" }
  ],
  partners: [
    { id: "DP-101", name: "Jordan Lee", phone: "+91 98201 10001", vehicle: "Motorcycle", status: "On Delivery", rating: 4.9, deliveries: 248 },
    { id: "DP-102", name: "Sam Rivera", phone: "+91 98201 10002", vehicle: "Scooter", status: "Available", rating: 4.8, deliveries: 192 },
    { id: "DP-103", name: "Taylor Kim", phone: "+91 98201 10003", vehicle: "Bicycle", status: "Available", rating: 4.9, deliveries: 315 },
    { id: "DP-104", name: "Jamie Chen", phone: "+91 98201 10004", vehicle: "Motorcycle", status: "On Break", rating: 4.7, deliveries: 176 },
    { id: "DP-105", name: "Morgan Diaz", phone: "+91 98201 10005", vehicle: "Scooter", status: "Offline", rating: 4.6, deliveries: 91 }
  ],
  customers: [
    { id: "CUS-501", name: "Olivia Rhye", email: "olivia@example.com", phone: "+91 90000 10001", address: "14 Park Street, Mumbai", orders: 24, spent: 486.5 },
    { id: "CUS-502", name: "Phoenix Baker", email: "phoenix@example.com", phone: "+91 90000 10002", address: "88 Linking Road, Mumbai", orders: 18, spent: 352.0 },
    { id: "CUS-503", name: "Lana Steiner", email: "lana@example.com", phone: "+91 90000 10003", address: "7 Hill Road, Mumbai", orders: 12, spent: 219.75 },
    { id: "CUS-504", name: "Demi Wilkinson", email: "demi@example.com", phone: "+91 90000 10004", address: "32 Carter Road, Mumbai", orders: 31, spent: 674.25 },
    { id: "CUS-505", name: "Candice Wu", email: "candice@example.com", phone: "+91 90000 10005", address: "2 Bandra West, Mumbai", orders: 9, spent: 194.5 }
  ],
  payments: [
    { id: "TXN-8801", order: "DP-2401", customer: "Olivia Rhye", method: "Credit Card", amount: 24.5, status: "Paid", date: "Today, 10:42 AM" },
    { id: "TXN-8800", order: "DP-2400", customer: "Phoenix Baker", method: "UPI", amount: 32.0, status: "Paid", date: "Today, 10:38 AM" },
    { id: "TXN-8799", order: "DP-2399", customer: "Lana Steiner", method: "Cash on Delivery", amount: 18.75, status: "Pending", date: "Today, 10:31 AM" },
    { id: "TXN-8798", order: "DP-2398", customer: "Demi Wilkinson", method: "UPI", amount: 21.25, status: "Paid", date: "Today, 10:19 AM" },
    { id: "TXN-8797", order: "DP-2397", customer: "Candice Wu", method: "Credit Card", amount: 28.5, status: "Paid", date: "Today, 10:12 AM" }
  ],
  reviews: [
    { id: "REV-101", customer: "Demi Wilkinson", restaurant: "The Green Fork", partner: "Sam Rivera", rating: 5, comment: "Fresh, delicious, and right on time. Loved the little note too!", date: "Today, 10:19 AM" },
    { id: "REV-102", customer: "Candice Wu", restaurant: "Sushi House", partner: "Taylor Kim", rating: 5, comment: "Perfectly packed and incredibly quick delivery.", date: "Today, 10:12 AM" },
    { id: "REV-103", customer: "Robby McCoy", restaurant: "Pasta & Co.", partner: "Jordan Lee", rating: 4, comment: "Really good pasta. Delivery was just a few minutes late.", date: "Yesterday" }
  ]
};

const STORAGE_KEY = "deliverypro-data-v1";
const pageNames = { dashboard: "Overview", orders: "Orders", tracking: "Live tracking", restaurants: "Restaurants", partners: "Delivery partners", customers: "Customers", payments: "Payments", reviews: "Reviews", routes: "Route planner", reports: "Reports" };
let data = loadData();
let currentPage = "dashboard";
let searchText = "";
let statusFilter = "All statuses";
let modalConfig = null;
let authMode = "login";
let currentUser = { name: "Alex Morgan", email: "alex@deliverypro.demo", role: "Administrator" };

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(initialData);
    const parsed = JSON.parse(saved);
    return Object.fromEntries(Object.entries(initialData).map(([key, fallback]) => [key, Array.isArray(parsed[key]) ? parsed[key] : structuredClone(fallback)]));
  } catch (error) {
    console.error("Could not load DeliveryPro data from local storage.", error);
    return structuredClone(initialData);
  }
}
function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
  catch (error) { console.error("Could not save DeliveryPro data to local storage.", error); toast("Could not save changes to this browser."); }
}
const currency = (amount) => "$" + Number(amount || 0).toFixed(2);
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const initials = (name) => String(name || "?").split(/\s+/).slice(0,2).map((part) => part[0]).join("").toUpperCase();
const slug = (value) => String(value || "").toLowerCase().replaceAll(" ", "-");
function toast(message) {
  const node = document.createElement("div"); node.className = "toast"; node.textContent = message;
  document.querySelector("#toast-region").append(node); setTimeout(() => node.remove(), 3000);
}
function statusBadge(status) { return `<span class="status ${slug(status)}">${escapeHtml(status)}</span>`; }
function pageHeading(title, subtitle, action = "") {
  return `<div class="page-heading"><div><span class="eyebrow">DELIVERY OPERATIONS</span><h1>${title}</h1><p class="page-subtitle">${subtitle}</p></div><div class="heading-actions">${action}</div></div>`;
}
function table(title, subtitle, columns, rows, options = {}) {
  const toolbar = options.toolbar ?? "";
  const headerActions = options.headerActions ?? "";
  return `<section class="panel content-panel"><div class="panel-header"><div><h2>${title}</h2>${subtitle ? `<div class="panel-subtitle">${subtitle}</div>` : ""}</div>${headerActions}</div>${toolbar}<div class="table-scroll"><table><thead><tr>${columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead><tbody>${rows || `<tr><td colspan="${columns.length}" class="table-empty">No records found.</td></tr>`}</tbody></table></div>${options.footer ?? ""}</section>`;
}
function actionsFor(type, id) {
  return `<div class="row-actions"><button class="small-action" title="Edit" aria-label="Edit" data-action="edit" data-type="${type}" data-id="${escapeHtml(id)}">✎</button><button class="small-action" title="Delete" aria-label="Delete" data-action="delete" data-type="${type}" data-id="${escapeHtml(id)}">×</button></div>`;
}
function statCard(label, value, icon, foot, trend = "↑ 12.8%") {
  return `<article class="stat-card"><div class="stat-head">${label}<span class="stat-icon">${icon}</span></div><div class="stat-value">${value}</div><div class="stat-foot"><span class="trend">${trend}</span>${foot}</div></article>`;
}
function orderRows(list, compact = false) {
  return list.map((order) => `<tr><td><strong>${escapeHtml(order.id)}</strong></td><td><div class="table-primary"><strong>${escapeHtml(order.customer)}</strong>${compact ? "" : `<span class="table-secondary">${escapeHtml(order.items)}</span>`}</div></td><td>${escapeHtml(order.restaurant)}</td><td>${currency(order.total)}</td><td>${statusBadge(order.status)}</td><td>${escapeHtml(order.partner || "Unassigned")}</td><td>${escapeHtml(order.time)}</td><td><div class="row-actions"><button class="small-action" title="Update status" aria-label="Update status" data-action="advance-order" data-id="${escapeHtml(order.id)}">↻</button>${actionsFor("orders", order.id).replace('<div class="row-actions">','').replace('</div>','')}</div></td></tr>`).join("");
}
function renderDashboard() {
  const active = data.orders.filter((order) => ["Pending","Preparing","Out for Delivery"].includes(order.status));
  const todayRevenue = data.payments.filter((payment) => payment.status === "Paid").reduce((sum, payment) => sum + Number(payment.amount), 0);
  const latest = [...data.orders].slice(0,5);
  return `${pageHeading("Good morning, Alex 👋","Here’s what’s happening with your deliveries today.",`<button class="button button-secondary" data-action="export-csv" data-type="orders">↓ <span>Export</span></button><button class="button button-primary" data-action="add" data-type="orders">＋ New order</button>`)}
  <div class="stats-grid">${statCard("Total orders",data.orders.length.toLocaleString(),"▤","vs. last month")} ${statCard("Active deliveries",active.length,"⌖","currently on the road")} ${statCard("Revenue today",currency(todayRevenue),"↗","vs. last month")} ${statCard("Avg. delivery time","28 min","◷","2 min faster","↓ 2 min")}</div>
  <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Revenue overview</h2><div class="panel-subtitle">Your earnings at a glance</div></div><select class="filter-select" aria-label="Revenue period"><option>Last 7 days</option><option>Last 30 days</option></select></div><div class="chart-wrap"><div class="chart-topline"><div class="chart-total">${currency(todayRevenue)} <small>↑ 12.8%</small></div><div class="chart-legend"><span>This week</span><span>Last week</span></div></div>${revenueChart()}</div></section>
  <section class="panel"><div class="panel-header"><div><h2>Orders by status</h2><div class="panel-subtitle">Current order distribution</div></div><button class="text-link" data-navigate="orders">View all</button></div><div class="progress-list">${statusProgress()}</div></section></div>
  <div class="quick-grid"><button class="quick-action" data-action="add" data-type="orders"><span>＋</span><div><strong>Create an order</strong><small>Add a new delivery</small></div></button><button class="quick-action" data-navigate="partners"><span>♙</span><div><strong>Manage team</strong><small>Check partner availability</small></div></button><button class="quick-action" data-navigate="tracking"><span>⌖</span><div><strong>Track deliveries</strong><small>See what’s on the road</small></div></button><button class="quick-action" data-navigate="reports"><span>▥</span><div><strong>View reports</strong><small>Explore your performance</small></div></button></div>
  ${table("Recent orders","Keep an eye on your latest activity",["Order ID","Customer","Restaurant","Total","Status","Partner","Time",""],orderRows(latest,true),{headerActions:`<button class="text-link" data-navigate="orders">View all orders →</button>`})}`;
}
function revenueChart() {
  const points = [115,94,106,67,83,50,62,39,58,30,45,23];
  const points2 = [122,116,91,103,87,94,70,79,61,65,52,49];
  const coords = (values) => values.map((v,i) => `${35+i*48},${v+14}`).join(" ");
  return `<svg class="chart" viewBox="0 0 570 180" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart"><defs><linearGradient id="fill-orange" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f97316" stop-opacity=".18"/><stop offset="100%" stop-color="#f97316" stop-opacity="0"/></linearGradient></defs><line class="chart-gridline" x1="30" y1="40" x2="555" y2="40"/><line class="chart-gridline" x1="30" y1="85" x2="555" y2="85"/><line class="chart-gridline" x1="30" y1="130" x2="555" y2="130"/><polygon points="35,155 ${coords(points)} 563,155" fill="url(#fill-orange)"/><polyline points="${coords(points2)}" fill="none" stroke="#ffd2b0" stroke-width="2" stroke-dasharray="4 5"/><polyline points="${coords(points)}" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day,i)=>`<text class="chart-label" x="${35+i*80}" y="174">${day}</text>`).join("")}</svg>`;
}
function statusProgress() {
  const total = Math.max(data.orders.length,1);
  return ["Delivered","Out for Delivery","Preparing","Pending"].map((status) => {
    const count = data.orders.filter((order) => order.status === status).length;
    return `<div class="progress-row"><div class="progress-meta"><span>${status}</span><strong>${count} <span class="table-secondary">(${Math.round(count/total*100)}%)</span></strong></div><div class="progress-track"><div class="progress-fill" style="width:${Math.max(4,count/total*100)}%"></div></div></div>`;
  }).join("");
}
function listToolbar(type, filters = true) {
  return `<div class="table-toolbar"><label class="search-box"><span>⌕</span><input type="search" placeholder="Search ${type}..." value="${escapeHtml(searchText)}" data-search></label><div class="toolbar-group">${filters ? `<select class="filter-select" data-status-filter aria-label="Filter by status"><option>All statuses</option>${(type === "orders" ? ["Pending","Preparing","Out for Delivery","Delivered","Cancelled"] : type === "partners" ? ["Available","On Delivery","Offline","On Break"] : ["Open","Closed"]).map((s)=>`<option ${statusFilter===s?"selected":""}>${s}</option>`).join("")}</select>` : ""}<button class="button button-secondary" data-action="export-csv" data-type="${type}">↓ Export</button></div></div>`;
}
function filtered(type, searchable, statusField) {
  return data[type].filter((item) => {
    const matches = !searchText || searchable(item).toLowerCase().includes(searchText.toLowerCase());
    const status = !statusField || statusFilter === "All statuses" || item[statusField] === statusFilter;
    return matches && status;
  });
}
function renderOrders() {
  const rows = orderRows(filtered("orders",(x)=>Object.values(x).join(" "),"status"));
  return `${pageHeading("Orders","Create, manage, and keep track of every order.",`<button class="button button-secondary" data-action="export-csv" data-type="orders">↓ Export</button><button class="button button-primary" data-action="add" data-type="orders">＋ New order</button>`)}${table("All orders",`${data.orders.length} orders in your workspace`,["Order ID","Customer","Restaurant","Total","Status","Partner","Time","Actions"],rows,{toolbar:listToolbar("orders")})}`;
}
function renderRestaurants() {
  const rows = filtered("restaurants",(x)=>Object.values(x).join(" "),"is_open").map((r)=>`<tr><td><strong>${escapeHtml(r.id)}</strong></td><td><span class="record-avatar">${initials(r.name)}</span><strong>${escapeHtml(r.name)}</strong></td><td>${escapeHtml(r.cuisine)}</td><td>${escapeHtml(r.location)}</td><td>${escapeHtml(r.contact)}</td><td><span class="rating">★</span> ${Number(r.rating).toFixed(1)}</td><td>${statusBadge(r.is_open)}</td><td>${actionsFor("restaurants",r.id)}</td></tr>`).join("");
  return `${pageHeading("Restaurants","Manage your restaurant partners and their details.",`<button class="button button-primary" data-action="add" data-type="restaurants">＋ Add restaurant</button>`)}<div class="detail-grid"><div class="detail-card"><small>Restaurant partners</small><strong>${data.restaurants.length}</strong></div><div class="detail-card"><small>Currently open</small><strong>${data.restaurants.filter(r=>r.is_open==="Open").length}</strong></div><div class="detail-card"><small>Average rating</small><strong>★ ${average(data.restaurants.map(r=>r.rating))}</strong></div></div>${table("All restaurants","Your active restaurant network",["Restaurant ID","Restaurant","Cuisine","Location","Contact","Rating","Status","Actions"],rows,{toolbar:listToolbar("restaurants")})}`;
}
function renderPartners() {
  const rows = filtered("partners",(x)=>Object.values(x).join(" "),"status").map((p)=>`<tr><td><strong>${escapeHtml(p.id)}</strong></td><td><span class="record-avatar">${initials(p.name)}</span><strong>${escapeHtml(p.name)}</strong></td><td>${escapeHtml(p.phone)}</td><td>${escapeHtml(p.vehicle)}</td><td>${statusBadge(p.status)}</td><td><span class="rating">★</span> ${Number(p.rating).toFixed(1)}</td><td>${p.deliveries}</td><td>${actionsFor("partners",p.id)}</td></tr>`).join("");
  return `${pageHeading("Delivery partners","Your delivery team, availability, and performance.",`<button class="button button-primary" data-action="add" data-type="partners">＋ Add partner</button>`)}<div class="detail-grid"><div class="detail-card"><small>Total partners</small><strong>${data.partners.length}</strong></div><div class="detail-card"><small>Available now</small><strong>${data.partners.filter(p=>p.status==="Available").length}</strong></div><div class="detail-card"><small>On delivery</small><strong>${data.partners.filter(p=>p.status==="On Delivery").length}</strong></div></div>${table("Delivery team","Update availability and manage your team",["Partner ID","Partner","Phone","Vehicle","Status","Rating","Deliveries","Actions"],rows,{toolbar:listToolbar("partners")})}`;
}
function renderCustomers() {
  const rows=filtered("customers",(x)=>Object.values(x).join(" ")).map((c)=>`<tr><td><strong>${escapeHtml(c.id)}</strong></td><td><span class="record-avatar">${initials(c.name)}</span><strong>${escapeHtml(c.name)}</strong></td><td>${escapeHtml(c.email)}</td><td>${escapeHtml(c.phone)}</td><td>${c.orders}</td><td>${currency(c.spent)}</td><td>${actionsFor("customers",c.id)}</td></tr>`).join("");
  return `${pageHeading("Customers","Get to know your customers and their order history.",`<button class="button button-primary" data-action="add" data-type="customers">＋ Add customer</button>`)}<div class="detail-grid"><div class="detail-card"><small>Customer profiles</small><strong>${data.customers.length}</strong></div><div class="detail-card"><small>Orders this month</small><strong>${data.orders.length}</strong></div><div class="detail-card"><small>Average lifetime spend</small><strong>${currency(data.customers.reduce((sum,c)=>sum+c.spent,0)/Math.max(data.customers.length,1))}</strong></div></div>${table("Customer directory","Customer contact details and lifetime value",["Customer ID","Customer","Email","Phone","Orders","Total spent","Actions"],rows,{toolbar:listToolbar("customers",false)})}`;
}
function renderPayments() {
  const paid=data.payments.filter(p=>p.status==="Paid").reduce((sum,p)=>sum+p.amount,0);
  const rows=filtered("payments",(x)=>Object.values(x).join(" ")).map((p)=>`<tr><td><strong>${escapeHtml(p.id)}</strong></td><td>${escapeHtml(p.order)}</td><td>${escapeHtml(p.customer)}</td><td>${escapeHtml(p.method)}</td><td><strong>${currency(p.amount)}</strong></td><td>${statusBadge(p.status)}</td><td>${escapeHtml(p.date)}</td><td>${p.status==="Paid"?`<button class="small-action" title="Refund" aria-label="Refund" data-action="refund" data-id="${escapeHtml(p.id)}">↶</button>`:"—"}</td></tr>`).join("");
  return `${pageHeading("Payments","Track transactions, payment methods, and refunds.",`<button class="button button-secondary" data-action="export-csv" data-type="payments">↓ Export history</button>`)}<div class="detail-grid"><div class="detail-card"><small>Collected today</small><strong>${currency(paid)}</strong></div><div class="detail-card"><small>Transactions</small><strong>${data.payments.length}</strong></div><div class="detail-card"><small>Pending payments</small><strong>${data.payments.filter(p=>p.status==="Pending").length}</strong></div></div>${table("Transaction history","Payment records from your orders",["Transaction ID","Order","Customer","Method","Amount","Status","Date",""],rows,{toolbar:listToolbar("payments",false)})}`;
}
function renderReviews() {
  const rows=filtered("reviews",(x)=>Object.values(x).join(" ")).map((r)=>`<tr><td><strong>${escapeHtml(r.id)}</strong></td><td><span class="record-avatar">${initials(r.customer)}</span><strong>${escapeHtml(r.customer)}</strong></td><td>${escapeHtml(r.restaurant)}</td><td>${escapeHtml(r.partner)}</td><td><span class="rating">${"★".repeat(Number(r.rating))}${"☆".repeat(5-Number(r.rating))}</span></td><td>${escapeHtml(r.comment)}</td><td>${escapeHtml(r.date)}</td></tr>`).join("");
  return `${pageHeading("Reviews & ratings","Customer feedback for restaurants and delivery partners.",`<button class="button button-secondary" data-action="export-csv" data-type="reviews">↓ Export</button><button class="button button-primary" data-action="add" data-type="reviews">＋ Add review</button>`)}<div class="detail-grid"><div class="detail-card"><small>Average rating</small><strong>★ ${average(data.reviews.map(r=>r.rating))}</strong></div><div class="detail-card"><small>Total reviews</small><strong>${data.reviews.length}</strong></div><div class="detail-card"><small>5-star reviews</small><strong>${data.reviews.filter(r=>Number(r.rating)===5).length}</strong></div></div>${table("Recent customer feedback","Reviews appear after a completed delivery",["Review ID","Customer","Restaurant","Delivery partner","Rating","Comment","Date"],rows,{toolbar:listToolbar("reviews",false)})}`;
}
function renderTracking() {
  const active=data.orders.filter(o=>["Out for Delivery","Preparing","Pending"].includes(o.status));
  return `${pageHeading("Live tracking","A live view of orders moving through your delivery network.",`<button class="button button-secondary" data-action="refresh-tracking">↻ Refresh</button>`)}<div class="detail-grid"><div class="detail-card"><small>Active deliveries</small><strong>${active.filter(o=>o.status==="Out for Delivery").length}</strong></div><div class="detail-card"><small>Preparing</small><strong>${active.filter(o=>o.status==="Preparing").length}</strong></div><div class="detail-card"><small>Average ETA</small><strong>18 min</strong></div></div><div class="tracking-layout"><section class="map-panel" aria-label="Illustrative delivery map"><div class="map-overlay"><strong>Mumbai delivery zone</strong><span class="table-secondary">${active.length} active orders · Updated just now</span></div><div class="map-pin pin-one"><span>♧</span></div><span class="map-label label-one">The Green Fork</span><div class="map-pin pin-two"><span>⌖</span></div><span class="map-label label-two">Jordan · DP-2401</span><div class="map-pin pin-three"><span>⌖</span></div><span class="map-label label-three">Sam · DP-2398</span></section><section class="panel"><div class="panel-header"><div><h2>On the move</h2><div class="panel-subtitle">${active.length} orders in progress</div></div></div><div class="tracking-list">${active.length?active.map(o=>`<article class="tracking-card"><div class="tracking-card-top"><strong>${escapeHtml(o.id)} · ${escapeHtml(o.customer)}</strong>${statusBadge(o.status)}</div><p>${escapeHtml(o.restaurant)} → ${escapeHtml(o.address)}</p><p>Partner: <strong>${escapeHtml(o.partner||"Unassigned")}</strong> &nbsp;·&nbsp; ETA: ${o.status==="Out for Delivery"?"12–18 min":"Preparing"}</p></article>`).join(""):`<div class="empty-state"><span class="empty-icon">⌖</span><strong>All caught up</strong><p>There are no active deliveries right now.</p></div>`}</div></section></div>`;
}
function renderRoutes() {
  const unassigned=data.orders.filter(o=>["Pending","Preparing"].includes(o.status)&&!o.partner);
  const available=data.partners.filter(p=>p.status==="Available");
  return `${pageHeading("Route planner","Organize your active stops into efficient delivery runs.",`<button class="button button-primary" data-action="optimize-routes">✦ Optimize routes</button>`)}<div class="tracking-layout"><section class="map-panel"><div class="map-overlay"><strong>Suggested delivery zone</strong><span class="table-secondary">Bandra · Mumbai</span></div><div class="map-pin pin-one"><span>1</span></div><div class="map-pin pin-two"><span>2</span></div><div class="map-pin pin-three"><span>3</span></div><span class="map-label label-one">Pickup</span><span class="map-label label-two">Stop 2</span><span class="map-label label-three">Stop 3</span></section><section class="panel"><div class="panel-header"><div><h2>Suggested route</h2><div class="panel-subtitle">${unassigned.length} unassigned orders · ${available.length} partners available</div></div></div><div class="progress-list"><div class="route-stop"><span class="route-number">1</span><div><strong>Pick up · The Green Fork</strong><small>Bandra West · 5 min from partner</small></div></div>${unassigned.slice(0,3).map((o,i)=>`<div class="route-stop"><span class="route-number">${i+2}</span><div><strong>Deliver · ${escapeHtml(o.customer)}</strong><small>${escapeHtml(o.address)} · ${currency(o.total)}</small></div></div>`).join("")}<div class="route-stop"><span class="route-number">✓</span><div><strong>${Math.max(2,unassigned.length+1)} stops · 24 min estimated</strong><small>Optimized for shortest travel distance</small></div></div><button class="button button-primary" style="width:100%;margin-top:14px" data-action="assign-routes">Assign available partner</button></div></section></div><div class="detail-grid"><div class="detail-card"><small>Orders awaiting assignment</small><strong>${unassigned.length}</strong></div><div class="detail-card"><small>Partners ready</small><strong>${available.length}</strong></div><div class="detail-card"><small>Estimated route savings</small><strong>18 min</strong></div></div>`;
}
function renderReports() {
  const paid=data.payments.filter(p=>p.status==="Paid").reduce((sum,p)=>sum+p.amount,0);
  const delivered=data.orders.filter(o=>o.status==="Delivered").length;
  return `${pageHeading("Reports & analytics","Understand your business performance and share your results.",`<div class="report-controls"><select class="filter-select" aria-label="Report period"><option>This month</option><option>This week</option><option>Today</option></select><button class="button button-primary" data-action="export-csv" data-type="orders">↓ Export report</button></div>`)}<div class="report-kpis"><article class="report-card"><span>Total revenue</span><strong>${currency(paid)}</strong><small>↑ 12.8% vs previous period</small></article><article class="report-card"><span>Orders delivered</span><strong>${delivered}</strong><small>↑ 8.2% vs previous period</small></article><article class="report-card"><span>Avg. order value</span><strong>${currency(data.orders.length?data.orders.reduce((s,o)=>s+Number(o.total),0)/data.orders.length:0)}</strong><small>↑ 4.1% vs previous period</small></article></div><div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2>Revenue performance</h2><div class="panel-subtitle">Daily revenue across the selected period</div></div></div><div class="chart-wrap">${revenueChart()}</div></section><section class="panel"><div class="panel-header"><div><h2>Delivery performance</h2><div class="panel-subtitle">Order status breakdown</div></div></div><div class="progress-list">${statusProgress()}<div class="progress-row"><div class="progress-meta"><span>Customer satisfaction</span><strong>${average(data.reviews.map(r=>r.rating))} / 5</strong></div><div class="progress-track"><div class="progress-fill" style="width:${Number(average(data.reviews.map(r=>r.rating)))*20}%"></div></div></div></div></section></div><section class="panel"><div class="panel-header"><div><h2>Shareable report</h2><div class="panel-subtitle">Download a spreadsheet to review or share your operations data.</div></div><button class="button button-secondary" data-action="export-csv" data-type="orders">Export orders CSV</button></div><div class="progress-list"><p class="page-subtitle">Exports include your current order records. You can open the file in spreadsheet apps for further analysis.</p></div></section>`;
}
function average(values) { return values.length ? (values.reduce((sum,v)=>sum+Number(v),0)/values.length).toFixed(1) : "0.0"; }
function render() {
  const renderers={ dashboard:renderDashboard, orders:renderOrders, restaurants:renderRestaurants, partners:renderPartners, customers:renderCustomers, payments:renderPayments, reviews:renderReviews, tracking:renderTracking, routes:renderRoutes, reports:renderReports };
  document.querySelector("#view").innerHTML=renderers[currentPage]();
  document.querySelector("#page-crumb").textContent=pageNames[currentPage];
  document.querySelectorAll(".nav-links a").forEach((link)=>link.classList.toggle("active",link.dataset.page===currentPage));
  document.querySelector("#order-nav-count").textContent=data.orders.filter(o=>["Pending","Preparing","Out for Delivery"].includes(o.status)).length;
  document.title=`${pageNames[currentPage]} — DeliveryPro`;
}
const field = (label,name,opts={}) => {
  const value=opts.value ?? "";
  const required=opts.required===false?"":"required";
  const cls=opts.full?"form-field full":"form-field";
  if(opts.options) return `<div class="${cls}"><label for="field-${name}">${label}</label><select id="field-${name}" name="${name}" ${required}>${opts.options.map(o=>`<option ${String(o)===String(value)?"selected":""}>${escapeHtml(o)}</option>`).join("")}</select></div>`;
  const inputType=opts.type||"text";
  if(inputType==="textarea") return `<div class="${cls}"><label for="field-${name}">${label}</label><textarea id="field-${name}" name="${name}" ${required}>${escapeHtml(value)}</textarea></div>`;
  return `<div class="${cls}"><label for="field-${name}">${label}</label><input id="field-${name}" name="${name}" type="${inputType}" value="${escapeHtml(value)}" ${required} ${opts.min!==undefined?`min="${opts.min}"`:""} ${opts.step?`step="${opts.step}"`:""}></div>`;
};
const formDefinitions = {
  orders: { title:"Create order", fields:(item={})=>field("Customer name","customer",{value:item.customer})+field("Restaurant","restaurant",{value:item.restaurant||data.restaurants[0]?.name,options:data.restaurants.map(r=>r.name)})+field("Order items","items",{value:item.items,full:true})+field("Total ($)","total",{value:item.total,type:"number",min:0,step:"0.01"})+field("Delivery address","address",{value:item.address,full:true})+field("Payment method","payment",{value:item.payment||"UPI",options:["Credit Card","UPI","Cash on Delivery","Net Banking","Mobile Wallet"]})+field("Status","status",{value:item.status||"Pending",options:["Pending","Preparing","Out for Delivery","Delivered","Cancelled"]})+field("Delivery partner","partner",{value:item.partner||"",options:["",...data.partners.map(p=>p.name)],required:false}) },
  restaurants: { title:"Add restaurant", fields:(item={})=>field("Restaurant name","name",{value:item.name})+field("Cuisine","cuisine",{value:item.cuisine})+field("Location","location",{value:item.location})+field("Contact number","contact",{value:item.contact})+field("Rating","rating",{value:item.rating||4.5,type:"number",min:0,step:"0.1"})+field("Availability","is_open",{value:item.is_open||"Open",options:["Open","Closed"]}) },
  partners: { title:"Add delivery partner", fields:(item={})=>field("Partner name","name",{value:item.name})+field("Phone number","phone",{value:item.phone})+field("Vehicle type","vehicle",{value:item.vehicle||"Motorcycle",options:["Motorcycle","Scooter","Bicycle"]})+field("Availability","status",{value:item.status||"Available",options:["Available","On Delivery","Offline","On Break"]})+field("Rating","rating",{value:item.rating||4.8,type:"number",min:0,step:"0.1"})+field("Completed deliveries","deliveries",{value:item.deliveries||0,type:"number",min:0}) },
  customers: { title:"Add customer", fields:(item={})=>field("Full name","name",{value:item.name})+field("Email address","email",{value:item.email,type:"email"})+field("Phone number","phone",{value:item.phone})+field("Delivery address","address",{value:item.address,full:true})+field("Previous orders","orders",{value:item.orders||0,type:"number",min:0})+field("Lifetime spend ($)","spent",{value:item.spent||0,type:"number",min:0,step:"0.01"}) },
  reviews: { title:"Add customer review", fields:(item={})=>field("Customer name","customer",{value:item.customer})+field("Restaurant","restaurant",{value:item.restaurant||data.restaurants[0]?.name,options:data.restaurants.map(r=>r.name)})+field("Delivery partner","partner",{value:item.partner||data.partners[0]?.name,options:data.partners.map(p=>p.name)})+field("Rating","rating",{value:item.rating||5,options:[1,2,3,4,5]})+field("Comment","comment",{value:item.comment,full:true})+field("Review date","date",{value:item.date||new Date().toLocaleDateString(),full:true}) }
};
function openModal(type,item=null) {
  const config=formDefinitions[type];
  if(!config) return;
  modalConfig={type,item};
  document.querySelector("#modal-title").textContent=item?`Edit ${singular(type)}`:config.title;
  document.querySelector("#modal-fields").innerHTML=config.fields(item||{});
  document.querySelector("#modal-backdrop").hidden=false;
  document.querySelector("#modal-fields input")?.focus();
}
function openAuthModal() {
  authMode="login";
  modalConfig={type:"auth",item:null};
  document.querySelector("#modal-title").textContent="Your DeliveryPro account";
  document.querySelector("#auth-modes").hidden=false;
  renderAuthFields();
  document.querySelector("#modal-backdrop").hidden=false;
  document.querySelector("#modal-fields input")?.focus();
}
function renderAuthFields() {
  const roleOptions=["Admin","Restaurant","Delivery Partner","Customer"];
  document.querySelectorAll("#auth-modes button").forEach(button=>button.classList.toggle("active",button.dataset.mode===authMode));
  document.querySelector("#modal-fields").innerHTML=(authMode==="register"?field("Full name","auth-name",{value:""}):"")+field("Email address","auth-email",{type:"email",value:"",full:true})+field("Password","auth-password",{type:"password",value:"",full:true})+field("Sign in as","auth-role",{options:roleOptions,full:true});
  document.querySelector("#modal-submit").textContent=authMode==="register"?"Create account":"Sign in";
}
function singular(type) { return ({orders:"order",restaurants:"restaurant",partners:"partner",customers:"customer"})[type]||type; }
function closeModal() { document.querySelector("#modal-backdrop").hidden=true;document.querySelector("#auth-modes").hidden=true;modalConfig=null; }
function newId(type) {
  const prefix={orders:"DP",restaurants:"RST",partners:"DP",customers:"CUS",reviews:"REV"}[type];
  const nums=data[type].map(x=>Number(String(x.id).match(/\d+/)?.[0]||0));
  return `${prefix}-${String(Math.max(0,...nums)+1).padStart(type==="orders"?4:3,"0")}`;
}
function collectForm(form) {
  const values=Object.fromEntries(new FormData(form).entries());
  if(values.total!==undefined) values.total=Number(values.total);
  for(const key of ["rating","deliveries","orders","spent"]) if(values[key]!==undefined) values[key]=Number(values[key]);
  return values;
}
function saveForm(event) {
  event.preventDefault();
  if(!modalConfig) return;
  const {type,item}=modalConfig, values=collectForm(event.currentTarget);
  if(type==="auth") {
    const roleNames={Admin:"Administrator",Restaurant:"Restaurant", "Delivery Partner":"Delivery Partner",Customer:"Customer"};
    const inferredName=values["auth-email"].split("@")[0].split(/[._-]/).map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    currentUser={name:values["auth-name"]||inferredName,email:values["auth-email"],role:roleNames[values["auth-role"]]};
    document.querySelector("#profile-name").textContent=currentUser.name;
    document.querySelector("#profile-role").textContent=currentUser.role;
    document.querySelector("#profile").querySelector(".avatar").textContent=initials(currentUser.name);
    document.querySelectorAll('[data-action="account"]').forEach(button=>button.textContent=initials(currentUser.name));
    closeModal();toast(authMode==="register"?"Demo account created.":"Signed in to the demo.");return;
  }
  if(type==="orders") {
    const id=item?.id||newId(type);
    const record={...item,...values,id,time:item?.time||new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})};
    if(!item) data.orders.unshift(record); else replaceItem(type,id,record);
    if(!item) data.payments.unshift({id:`TXN-${Date.now().toString().slice(-4)}`,order:id,customer:values.customer,method:values.payment,amount:values.total,status:values.payment==="Cash on Delivery"?"Pending":"Paid",date:`Today, ${record.time}`});
  } else {
    const id=item?.id||newId(type), record={...item,...values,id};
    if(!item) data[type].unshift(record); else replaceItem(type,id,record);
  }
  saveData(); closeModal(); render(); toast(`${singular(type)} ${item?"updated":"created"} successfully.`);
}
function replaceItem(type,id,record) { data[type]=data[type].map((item)=>item.id===id?record:item); }
function removeItem(type,id) {
  if(!data[type]||!confirm(`Delete this ${singular(type)}? This action cannot be undone.`)) return;
  data[type]=data[type].filter((item)=>item.id!==id);saveData();render();toast(`${singular(type)} deleted.`);
}
function advanceOrder(id) {
  const sequence=["Pending","Preparing","Out for Delivery","Delivered"];
  const order=data.orders.find(o=>o.id===id);
  if(!order) return;
  if(order.status==="Cancelled"||order.status==="Delivered") { toast(`Order is already ${order.status.toLowerCase()}.`);return; }
  order.status=sequence[Math.min(sequence.indexOf(order.status)+1,sequence.length-1)];
  if(order.status==="Out for Delivery"&&!order.partner) {
    const partner=data.partners.find(p=>p.status==="Available");
    if(partner) { order.partner=partner.name;partner.status="On Delivery"; }
  }
  if(order.status==="Delivered"&&order.partner) {
    const partner=data.partners.find(p=>p.name===order.partner);
    if(partner) { partner.status="Available";partner.deliveries=Number(partner.deliveries)+1; }
  }
  saveData();render();toast(`${id} moved to ${order.status}.`);
}
function refundPayment(id) {
  const payment=data.payments.find(p=>p.id===id);
  if(!payment||payment.status!=="Paid") return;
  if(!confirm(`Refund ${currency(payment.amount)} for order ${payment.order}?`)) return;
  payment.status="Refunded";saveData();render();toast(`Refund processed for ${payment.order}.`);
}
function exportCsv(type) {
  const records=data[type];
  if(!Array.isArray(records)||!records.length) { toast("There are no records to export.");return; }
  const keys=Object.keys(records[0]);
  const quote=(value)=>`"${String(value??"").replaceAll('"','""')}"`;
  const csv=[keys.map(quote).join(","),...records.map(row=>keys.map((key)=>quote(row[key])).join(","))].join("\r\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
  const url=URL.createObjectURL(blob),link=document.createElement("a");
  link.href=url;link.download=`deliverypro-${type}-${new Date().toISOString().slice(0,10)}.csv`;link.click();URL.revokeObjectURL(url);toast(`${type[0].toUpperCase()+type.slice(1)} exported as CSV.`);
}
function assignRoutes() {
  const partner=data.partners.find(p=>p.status==="Available");
  const orders=data.orders.filter(o=>["Pending","Preparing"].includes(o.status)&&!o.partner);
  if(!partner||!orders.length) { toast(!partner?"No delivery partners are currently available.":"No unassigned orders need a partner.");return; }
  const assigned=orders.slice(0,3);
  assigned.forEach((order,index)=>{order.partner=partner.name;if(index===0)order.status="Out for Delivery";});
  partner.status="On Delivery";saveData();render();toast(`${assigned.length} order${assigned.length===1?"":"s"} assigned to ${partner.name}.`);
}
function handleAction(action,target) {
  if(action==="add") openModal(target.dataset.type);
  if(action==="edit") { const item=data[target.dataset.type]?.find(x=>x.id===target.dataset.id);if(item)openModal(target.dataset.type,item); }
  if(action==="delete") removeItem(target.dataset.type,target.dataset.id);
  if(action==="advance-order") advanceOrder(target.dataset.id);
  if(action==="refund") refundPayment(target.dataset.id);
  if(action==="close-modal") closeModal();
  if(action==="export-csv") exportCsv(target.dataset.type);
  if(action==="optimize-routes") { render();toast("Route optimized for the shortest estimated travel time."); }
  if(action==="assign-routes") assignRoutes();
  if(action==="refresh-tracking") { render();toast("Tracking information refreshed."); }
  if(action==="notifications") toast("You’re all caught up on notifications.");
  if(action==="support") toast("Support chat is simulated in this demo.");
  if(action==="account") openAuthModal();
  if(action==="account-mode") { authMode=target.dataset.mode;renderAuthFields(); }
  if(action==="dark-mode") { document.body.classList.toggle("mode-dark");toast(document.body.classList.contains("mode-dark")?"Dark mode enabled.":"Light mode enabled."); }
}
function navigate(page) {
  if(!pageNames[page]) return;
  currentPage=page;searchText="";statusFilter="All statuses";render();
  document.querySelector("#sidebar").classList.remove("open");
  window.location.hash=page;
}
document.addEventListener("click",(event)=>{
  const actionTarget=event.target.closest("[data-action]");
  if(actionTarget) { handleAction(actionTarget.dataset.action,actionTarget);return; }
  const navTarget=event.target.closest("[data-navigate]");
  if(navTarget) { navigate(navTarget.dataset.navigate);return; }
  const pageTarget=event.target.closest("[data-page]");
  if(pageTarget) { event.preventDefault();navigate(pageTarget.dataset.page); }
});
document.querySelector("#modal-form").addEventListener("submit",saveForm);
document.querySelector("#modal-backdrop").addEventListener("click",(event)=>{if(event.target.id==="modal-backdrop")closeModal();});
document.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeModal();});
document.querySelector("#view").addEventListener("input",(event)=>{
  if(event.target.matches("[data-search]")) { searchText=event.target.value;const cursor=event.target.selectionStart;render();const input=document.querySelector("[data-search]");input.focus();input.setSelectionRange(cursor,cursor); }
});
document.querySelector("#view").addEventListener("change",(event)=>{
  if(event.target.matches("[data-status-filter]")) { statusFilter=event.target.value;render(); }
});
document.querySelector("#menu-toggle").addEventListener("click",()=>document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("#today-label").textContent=new Intl.DateTimeFormat(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"}).format(new Date());
window.addEventListener("hashchange",()=>{
  const page=location.hash.slice(1);
  if(pageNames[page]&&page!==currentPage) { currentPage=page;searchText="";statusFilter="All statuses";render(); }
});
const savedPage=location.hash.slice(1);
if(pageNames[savedPage]) currentPage=savedPage;
render();
