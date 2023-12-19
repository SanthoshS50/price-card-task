import React from "react";
import Card from "./components/card";
function App() {
  let cardData = [
    {
      title: "Free",
      monthPrice: "$0",
      user: "Single User",
      storage: "50GB Storage",
      project: "text-muted",
      projectIcon: "fas fa-times",
      phone: "tex-muted",
      phoneIcon: "fas fa-times",
      subdomain: "text-muted",
      subdomainIcon: "fas fa-times",
      montlyStatus: "text-muted",
      monthlyStatusIcon: "fas fa-times",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      montlyStatus: "text-muted",
      monthlyStatusIcon: "fas fa-times",
    },
    {
      title: "Pro",
      monthPrice: "$49",
      user: "Unlimited Users",
      storage: "50GB Storage",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      montlyStatus: "",
      monthlyStatusIcon: "fas fa-check",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {cardData.map((e, i) => {
            return <Card data={e} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;