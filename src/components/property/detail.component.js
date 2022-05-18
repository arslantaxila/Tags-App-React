import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Detail() {
  const { id } = useParams();

  const [property, setProperty] = useState("");

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    await axios
      .get(`https://tagsapp1122.herokuapp.com/api/properties/${id}`)
      .then(({ data }) => {
        setProperty(data);
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link className="btn btn-dark mb-2 float-end" to={"/"}>
            Property List
          </Link>
        </div>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-xl-6">
              <div className="col-12">
                <h5>Tenancy Details</h5>
                <hr className="text-muted" />
              </div>

              <div className="row col-12 mb-5">
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Monthly Rental</p>
                  <p className="text-dark">£{property.monthly_rental}</p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Deposit Amount</p>
                  <p className="text-dark">£{property.deposit_amount}</p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Maximum Number of Tenants</p>
                  <p className="text-dark">{property.max_tenants}</p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Minimum Tenancy Duration</p>
                  <p className="text-dark">
                    {property.minimum_duration_months}
                  </p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Available From</p>
                  <p className="text-dark">{property.available_from}</p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-muted">Council Tax Band</p>
                  <p className="text-dark">{property.council_tax_band}</p>
                </div>
                <div className="col-12 col-md-4 mb-6">
                  <p className="text-muted">
                    EPC (Enerfy Performance Certificate) Rating
                  </p>
                  <p className="text-dark">{property.epc_rating}</p>
                </div>
              </div>
              {property && property.tags.length >0 && (
                <div className="col-12">
                  <h5>Additional Details</h5>
                  <hr className="text-muted" />
                </div>
              )}
              <div className="col-12 mb-5">
                {property.tags &&
                  property.tags.map((row) => (
                    <button
                      key={row.id}
                      type="button"
                      className="btn btn-outline-secondary mx-1"
                    >
                      {row.name}
                    </button>
                  ))}
              </div>

              <div className="col-12">
                <h5>Property Description</h5>
                <hr className="text-muted" />
              </div>

              <div className="row col-12 mb-5">
                <div className="col-12 col-md-4 mb-3">
                  <p className="text-dark">{property.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
