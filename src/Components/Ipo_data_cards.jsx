import React from "react";

const ipoDataCard1 = [
  {
    id: 1,
    name: "ICICI Prudential AMC",
    // img: "src/assets/images/Cards/cards_set1/icici-prudential-amc-ipo_CardSet1.jpg",
    img: "https://ipowatch.in/wp-content/uploads/2025/10/icici-prudential-amc-ipo.jpg",
    description: "ICICI Prudential AMC IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
  {
    id: 2,
    name: "Meesho",
    // img: "src/assets/images/Cards/cards_set1/meesho-ipo_CardSet1.jpg",
    img: "https://ipowatch.in/wp-content/uploads/2025/10/meesho-ipo.jpg",
    description: "Meesho IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
  {
    id: 3,
    name: "Lenskart Solutions",
    // img: "src/assets/images/Cards/cards_set1/lenskart-solutions-ipo_CardSet1.jpg",
    img:"https://ipowatch.in/wp-content/uploads/2025/10/lenskart-solutions-ipo.jpg",
    description: "Lenskart Solutions IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
  {
    id: 4,
    name: "Jayesh Logistics",
    // img: "src/assets/images/Cards/cards_set1/jayesh-logistics-ipo_CardSet1.jpg",
    img:"https://ipowatch.in/wp-content/uploads/2025/10/jayesh-logistics-ipo.jpg",
    description: "Jayesh Logistics IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
];

const ipoDataCard2 = [
  {
    id: 1,
    name: "ICICI Prudential AMC",
    // img: "src/assets/images/Cards/cards_set1/icici-prudential-amc-ipo_CardSet1.jpg",
    img: "https://ipowatch.in/wp-content/uploads/2025/10/icici-prudential-amc-ipo.jpg",
    description: "ICICI Prudential AMC IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
  {
    id: 2,
    name: "Meesho",
    // img: "src/assets/images/Cards/cards_set1/meesho-ipo_CardSet1.jpg",
    img: "https://ipowatch.in/wp-content/uploads/2025/10/meesho-ipo.jpg",
    description: "Meesho IPO GMP, Grey Market Premium Today",
    date: "October 28, 2025",
  },
  {
    id: 3,
    name: "Orkla India",
    img: "src/assets/images/Cards/cards_set2/orkla-india-ipo_Cardset2.jpg",
    img:"https://ipowatch.in/wp-content/uploads/2025/10/orkla-india-ipo.jpg",
    description: "Orkla India IPO Date, Review, Price, Allotment Details",
    date: "October 28, 2025",
  },
  {
    id: 4,
    name: "Studds Accessories",
    // img: "src/assets/images/Cards/cards_set2/studds-accessories-ipo_Cardset2.jpg",
    img:"https://ipowatch.in/wp-content/uploads/2025/10/studds-accessories-ipo.jpg",
    description: "Studds Accessories IPO Date, Review, Price, Allotment Details",
    date: "October 28, 2025",
  },
];


const IpoCards = () => {
  return (
    <div className="container my-5">
      {/* Card set 1 ---------------------------------- */}

      <hr className="mb-4" />
      <h3 className="fw-bold mb-4 px-3">
        IPO GMP – Grey Market Premium
      </h3>

      <div className="row g-4">
        {ipoDataCard1.map((ipo) => (
          <div className="col-12 col-sm-6 col-lg-3" key={ipo.id}>
            <div className="card border-0">
              <div className="text-center px-3">
                <img
                  src={ipo.img}
                  alt={ipo.name}
                  className="img-fluid rounded card-img-top"
                />
              </div>
              <div className="card-body">
                <p className="card-text small text-muted mb-2">
                  {ipo.description}
                </p>
                <p className="text-primary small mb-0">{ipo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 fw-semibold">
          Read More →
        </button>
      </div>

      <hr className="mt-5" />

       {/* Card set 2 ---------------------------------- */}

      <h3 className="fw-bold mb-4 px-3">
       Upcoming Mainboard IPOs
      </h3>

      <div className="row g-4">
        {ipoDataCard2.map((ipo) => (
          <div className="col-12 col-sm-6 col-lg-3" key={ipo.id}>
            <div className="card border-0">
              <div className="text-center px-3">
                <img
                  src={ipo.img}
                  alt={ipo.name}
                  className="img-fluid rounded card-img-top"
                />
              </div>
              <div className="card-body">
                <p className="card-text small text-muted mb-2">
                  {ipo.description}
                </p>
                <p className="text-primary small mb-0">{ipo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 fw-semibold">
          Read More →
        </button>
      </div>

      <hr className="mt-5" />

       {/* Card set 3 ---------------------------------- */}

      <h3 className="fw-bold mb-4 px-3">
       Upcoming SME IPOs
      </h3>

      <div className="row g-4">
        {ipoDataCard2.map((ipo) => (
          <div className="col-12 col-sm-6 col-lg-3" key={ipo.id}>
            <div className="card border-0">
              <div className="text-center px-3">
                <img
                  src={ipo.img}
                  alt={ipo.name}
                  className="img-fluid rounded card-img-top"
                />
              </div>
              <div className="card-body">
                <p className="card-text small text-muted mb-2">
                  {ipo.description}
                </p>
                <p className="text-primary small mb-0">{ipo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 fw-semibold">
          Read More →
        </button>
      </div>

      <hr className="mt-5" />

       {/* Card set 4 ---------------------------------- */}

      <h3 className="fw-bold mb-4 px-3">
       IPO Subscription Status
      </h3>

      <div className="row g-4">
        {ipoDataCard2.map((ipo) => (
          <div className="col-12 col-sm-6 col-lg-3" key={ipo.id}>
            <div className="card border-0">
              <div className="text-center px-3">
                <img
                  src={ipo.img}
                  alt={ipo.name}
                  className="img-fluid rounded card-img-top"
                />
              </div>
              <div className="card-body">
                <p className="card-text small text-muted mb-2">
                  {ipo.description}
                </p>
                <p className="text-primary small mb-0">{ipo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 fw-semibold">
          Read More →
        </button>
      </div>

      <hr className="mt-5" />

       {/* Card set 5 ---------------------------------- */}

      <h3 className="fw-bold mb-4 px-3">
      IPO Allotment Status
      </h3>

      <div className="row g-4">
        {ipoDataCard2.map((ipo) => (
          <div className="col-12 col-sm-6 col-lg-3" key={ipo.id}>
            <div className="card border-0">
              <div className="text-center px-3">
                <img
                  src={ipo.img}
                  alt={ipo.name}
                  className="img-fluid rounded card-img-top"
                />
              </div>
              <div className="card-body">
                <p className="card-text small text-muted mb-2">
                  {ipo.description}
                </p>
                <p className="text-primary small mb-0">{ipo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 fw-semibold">
          Read More →
        </button>
      </div>


    </div>
  );
};

export default IpoCards;
