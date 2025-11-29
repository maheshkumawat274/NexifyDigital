// PopularSolutions.tsx
import React from "react";

import  { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { motion } from "framer-motion";

/* ===== Types ===== */
type MainTabs = "doctor" | "hotel" | "multi";
type DoctorTabs = "admin" | "doctor" | "patient";
type HotelTabs = "admin" | "manager" | "cashier";
type MultiTabs = "admin" | "vendor" | "customer";

/* ===== Feature data (you already approved content) ===== */
/* Doctor */
const doctorAdmin = [
  "Total Appointments (Today / Upcoming / Completed)",
  "Doctors & Patients Full Management",
  "Staff, Appointments, Smart Patient Cards",
  "Admin Profile Management",
  "Notification System",
  "Earnings Dashboard (Daily, Monthly, Total)",
  "Appointment Analytics Graph",
  "Medicines Stock & Transactions Tracking",
  "Visit History Records",
  "Secure Login + Role Permissions",
  "Modern UI + Dark Mode",
  
  
];

const doctorPanel = [
  "Manage Appointments",
  "Total, Today & Upcoming Appointments",
  "Monthly Earnings Overview",
  "Weekly Schedule Planner",
  "Live Consultations",
  "Holidays Management",
  "Monthly Appointment Graph",
  "Transaction Summary",
  "Visit History",
  "Google Calendar Integration",
  "Doctor Profile Settings",
  "Light/Dark Mode",
];

const patientPanel = [
  "Book Appointments",
  "Doctor List + Profile View",
  "Total, Today & Completed Appointments",
  "Reviews System",
  "Live Consultations",
  "Monthly Expense Overview",
  "Expense Analytics Graph",
  "Today's & Upcoming Appointment View",
  "Transaction History",
  "Visit Records",
  "Google Calendar Integration",
];

/* Hotel */
const hotelAdmin = [
  "Today’s Booking + Total Revenue Dashboard",
  "Customer Reservation Analytics",
  "Booking History & Trends",
  "Customer & Account Management",
  "Room Reservation System",
  "Room Settings (Type, Price, Amenities)",
  "Room Facilities Management",
  "Purchase Management",
  "Payment Settings + Transactions",
  "Financial, Booking & Customer Reports",
  "Restaurant Module (Addon)",
  "Hall Room Booking (Addon)",
  "Housekeeping (Addon)",
  "Duty Roster (Addon)",
  "Car Parking, Transport, WhatsApp (Addons)",
];

const hotelManager = [
  "Today’s Booking Overview",
  "Total Customers & Total Booking",
  "Reservation Analytics Graph",
  "Customer Management",
  "Room Reservation / Room Settings",
  "Room Facilities",
  "Restaurant (Addon)",
  "Hall Room (Addon)",
  "Booking History",
  "Monthly Reservation Chart",
  "Booking Report Overview",
  "Profile Settings + Notifications",
];

const hotelCashier = [
  "Today’s Booking + Total Amount Summary",
  "Customer Reservation Analytics",
  "Customer Invoice Management",
  "Payment Processing",
  "Day Close (Daily Settlement)",
  "Transactions History",
  "Cash Handling Reports",
  "Room Reservation (Limited Access)",
  "Customer Overview",
  "Profile Management",
  "Lightweight Fast Billing UI",
];

/* Multi-vendor */
const multiAdmin = [
  "Vendor Registration + Approval Workflow",
  "Vendor Commission Setup (Percentage / Fixed)",
  "Product Approval System",
  "Category, Subcategory, Attributes Management",
  "Global Orders Dashboard",
  "Customer Management",
  "Admin Earnings Dashboard",
  "Coupons, Offers & Discount Engine",
  "Payouts to Vendors (Manual/Auto)",
  "Reports: Sales / Orders / Vendor / Commission",
  "CMS Pages (Home, Banners, Policies)",
  "Notifications & Email Templates",
];

const multiVendor = [
  "Vendor Dashboard (Sales, Orders, Revenue)",
  "Product Upload + Unlimited Variants",
  "Inventory Management",
  "Order Management",
  "Storefront Customization (Logo, Banner, Theme)",
  "Earnings & Payout Reports",
  "Customer Messages",
  "Delivery Status Updates",
  "Returns / Refund Handling",
  "Ratings & Review Management",
];

const multiCustomer = [
  "Customer Dashboard",
  "Product Search + Advanced Filters",
  "Add to Cart / Wishlist",
  "Checkout (UPI / Cards / Wallet / COD)",
  "Order Tracking",
  "Returns / Refund Requests",
  "Notifications (Email + WhatsApp)",
  "Reviews & Ratings System",
];

/* ===== Animations variants ===== */
const containerFade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const listItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

/* ===== Component ===== */
export default function PopularSolutions(): React.JSX.Element {
  const [active, setActive] = useState<MainTabs>("doctor");
  const [doctorRole, setDoctorRole] = useState<DoctorTabs>("admin");
  const [hotelRole, setHotelRole] = useState<HotelTabs>("admin");
  const [multiRole, setMultiRole] = useState<MultiTabs>("admin");

  const renderList = (items: string[]) => {
    return (
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.03 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {items.map((f, i) => (
          <motion.li
            key={i}
            variants={listItem}
            className="flex gap-3 items-start bg-white p-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
          >
            <span className="flex-shrink-0 mt-1 text-[#233AA7] text-xl">
              <FiCheck />
            </span>
            <span className="text-gray-700 text-sm font-medium">{f}</span>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <section className="w-full py-4 px-4 md:px-10 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerFade}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700">
            Nexify Digital Business Suites
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Popular enterprise systems for clinics, hotels and multi-vendor marketplaces — custom dashboards, reporting, automation and integrations.
          </p>

          
        </motion.div>

        {/* Tabs + Price badge */}
        <div className="flex items-center gap-6 justify-center mb-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {(["doctor", "hotel", "multi"] as MainTabs[]).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full cursor-pointer font-semibold text-sm transition-all shadow-md ${
                  active === tab
                    ? "bg-[#233AA7] text-white border-indigo-700 shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab === "doctor" && "Doctor Management"}
                {tab === "hotel" && "Hotel Management"}
                {tab === "multi" && "Multi-Vendor Marketplace"}
              </motion.button>
            ))}
          </div>

          {/* Price badge (shows to the right on desktop) */}
          <div className="ml-4 hidden md:flex items-center bg-white px-5 py-3 rounded-xl shadow-lg border border-gray-200">
            <span className="text-sm text-gray-500 line-through mr-3">₹1,49,000</span>
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-700">₹49,999/-</span>
          </div>
        </div>

        {/* Content card */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerFade}
          className="bg-white p-3 sm:p-8 rounded-3xl shadow-2xl border border-gray-200"
        >
          {/* DOCTOR */}
          {active === "doctor" && (
            <div>
              {/* Sub tabs */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {(["admin", "doctor", "patient"] as DoctorTabs[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setDoctorRole(r)}
                    className={`px-4 py-1.5 rounded-md text-sm cursor-pointer font-medium transition border ${
                      doctorRole === r ? "bg-[#233AA7] text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    {r.toUpperCase()} PANEL
                  </button>
                ))}
              </div>

              {/* Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Doctor / Clinic Management</h3>
                  <p className="text-gray-600 mb-4">
                    Complete platform with Admin, Doctor & Patient portals — appointments, billing, live consults and analytics.
                  </p>

                  {/* Features */}
                  {renderList(
                    doctorRole === "admin" ? doctorAdmin : doctorRole === "doctor" ? doctorPanel : patientPanel
                  )}
                </div>

                <aside className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-4 border border-indigo-100 shadow-sm">
                    <div className="text-sm text-gray-500">Approx Price</div>
                    <div className="text-2xl font-bold text-[#233AA7]">₹39,999 – ₹59,999</div>
                    <div className="text-xs text-gray-500 mt-2">Final price depends on features & integrations</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm text-gray-500">Quick Contact</div>
                  
                    <div className="mt-3">
                      <div className="text-sm font-semibold">Mahesh</div>
                      <div className="text-xs text-gray-500">+91 6376228917</div>
                    </div>
                  
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/916376228917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 bg-green-500 hover:underline text-white text-sm font-medium px-3 py-2 w-28 rounded-lg transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .08 5.36.08 11.94c0 2.1.56 4.15 1.63 5.96L0 24l6.32-1.64a12 12 0 0 0 5.72 1.46h.01c6.6 0 12.04-5.36 12.04-11.94a11.82 11.82 0 0 0-3.57-8.4ZM12.04 21.3a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.75.97 1-3.66-.24-.38a9.86 9.86 0 0 1-1.55-5.24c0-5.47 4.48-9.92 9.96-9.92 2.66 0 5.17 1.03 7.05 2.9a9.88 9.88 0 0 1 2.92 7.02c0 5.47-4.48 9.92-9.96 9.92Zm5.4-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-1.77-.87-2.94-1.55-4.1-3.5-.31-.53.31-.5.87-1.67.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.2 3.1.15.2 2.08 3.18 5.05 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
                      </svg>
                  
                      WhatsApp
                    </a>
                  </div>
                  

                  <div>
                    <a
                      href="tel:6376228917"
                      className="w-full px-4 py-3 bg-[#233AA7] text-white rounded-full font-medium shadow hover:underline transition flex items-center justify-center gap-2"
                    >
                      {/* Phone Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.74a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1c0 1.27.2 2.52.59 3.68a1 1 0 0 1-.25 1.01l-2.47 2.1Z" />
                      </svg>
                    
                      Call Now
                    </a>
                    
                  </div>
                </aside>
              </div>
            </div>
          )}

          {/* HOTEL */}
          {active === "hotel" && (
            <div>
              <div className="flex gap-3 mb-6 flex-wrap">
                {(["admin", "manager", "cashier"] as HotelTabs[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setHotelRole(r)}
                    className={`px-4 py-1.5 rounded-md cursor-pointer text-sm font-medium transition border ${
                      hotelRole === r ? "bg-[#233AA7] text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    {r.toUpperCase()} PANEL
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Hotel Management System</h3>
                  <p className="text-gray-600 mb-4">
                    Powerful hotel admin with reservations, billing, inventory and reporting modules. Manager & cashier roles included.
                  </p>

                  {renderList(hotelRole === "admin" ? hotelAdmin : hotelRole === "manager" ? hotelManager : hotelCashier)}
                </div>

                <aside className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-4 border border-indigo-100 shadow-sm">
                    <div className="text-sm text-gray-500">Approx Price</div>
                    <div className="text-2xl font-bold text-[#233AA7]">₹49,999 – ₹69,999</div>
                    <div className="text-xs text-gray-500 mt-2">Custom modules change final price</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">

                    <div className="text-sm text-gray-500">Demo Contact</div>
                  
                    <div className="mt-3">
                      <div className="text-sm font-semibold">Mahesh</div>
                      <div className="text-xs text-gray-500">+91 6376228917</div>
                    </div>
                  
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/916376228917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-48 mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-md font-medium shadow hover:underline transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .08 5.36.08 11.94c0 2.1.56 4.15 1.63 5.96L0 24l6.32-1.64a12 12 0 0 0 5.72 1.46h.01c6.6 0 12.04-5.36 12.04-11.94a11.82 11.82 0 0 0-3.57-8.4Z" />
                      </svg>
                      WhatsApp
                    </a>
                  
                  </div>
                  
                  
                  {/* Call Button */}
                  <a
                    href="tel:6376228917"
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#233AA7] text-white rounded-full font-medium shadow hover:bg-blue-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.74a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1c0 1.27.2 2.52.59 3.68a1 1 0 0 1-.25 1.01l-2.47 2.1Z" />
                    </svg>
                    Call Now
                  </a>
                  
                </aside>
              </div>
            </div>
          )}

          {/* MULTI-VENDOR */}
          {active === "multi" && (
            <div>
              <div className="flex gap-3 mb-6 flex-wrap">
                {(["admin", "vendor", "customer"] as MultiTabs[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setMultiRole(r)}
                    className={`px-4 py-1.5 rounded-md cursor-pointer text-sm font-medium transition border ${
                      multiRole === r ? "bg-[#233AA7] text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    {r.toUpperCase()} PANEL
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Multi-Vendor Marketplace</h3>
                  <p className="text-gray-600 mb-4">
                    Full marketplace solution with vendor management, payouts, commissions and storefront customization.
                  </p>

                  {renderList(multiRole === "admin" ? multiAdmin : multiRole === "vendor" ? multiVendor : multiCustomer)}
                </div>

                <aside className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-4 border border-indigo-100 shadow-sm">
                    <div className="text-sm text-gray-500">Approx Price</div>
                    <div className="text-2xl font-bold text-[#233AA7]">₹49,999 – ₹69,999</div>
                    <div className="text-xs text-gray-500 mt-2">Depends on vendors, integrations & custom modules</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm text-gray-500">Contact for demo</div>
                    <div className="mt-3">
                      <div className="text-sm font-semibold">Mahesh</div>
                      <div className="text-xs text-gray-500">+91 6376228917</div>
                      {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/916376228917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-48 mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-md font-medium shadow hover:underline transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.44 0 .08 5.36.08 11.94c0 2.1.56 4.15 1.63 5.96L0 24l6.32-1.64a12 12 0 0 0 5.72 1.46h.01c6.6 0 12.04-5.36 12.04-11.94a11.82 11.82 0 0 0-3.57-8.4Z" />
                      </svg>
                      WhatsApp
                    </a>
                    </div>
                  </div>

                  {/* Call Button */}
                  <a
                    href="tel:6376228917"
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#233AA7] text-white rounded-full font-medium shadow hover:bg-blue-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.74a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1c0 1.27.2 2.52.59 3.68a1 1 0 0 1-.25 1.01l-2.47 2.1Z" />
                    </svg>
                    Call Now
                  </a>
                </aside>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3">
              <a
                    href="tel:6376228917"
                    className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#233AA7] text-white rounded-full font-medium shadow hover:underline transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.74a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1c0 1.27.2 2.52.59 3.68a1 1 0 0 1-.25 1.01l-2.47 2.1Z" />
                    </svg>
                Get a Free Quote
              </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">All prices are approximate and subject to change based on exact requirements.</p>
        </div>
      </div>
    </section>
  );
}
