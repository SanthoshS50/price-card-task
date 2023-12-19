import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
          <h6 className="card-price text-center">{props.data.monthPrice}/month</h6>
          <hr/>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.user}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
            <li className={props.data.project}><span className="fa-li"><i className={props.data.projectIcon}></i></span>Unlimited Private Projects</li>
            <li className={props.data.project}><span className="fa-li"><i className={props.data.phoneIcon}></i></span>Dedicated Phone Support</li>
            <li className={props.data.subdomain}><span className="fa-li"><i className={props.data.subdomainIcon}></i></span>Free Subdomain</li>
            <li className={props.data.montlyStatus}><span className="fa-li"><i className={props.data.monthlyStatusIcon}></i></span>Monthly Status Reports</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
