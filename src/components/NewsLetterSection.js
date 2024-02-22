import React from "react";

const NewsLetterSection = () => {
  return (
    <>
      <div className="newsletter newsletter-bg text-center p-5 container mt-5">
        <h4 className="font-xl font-bolt mx-4 prime-color newsletter-sm">
          Subscribe on our Newsletter
        </h4>
        <p className="font-sm text-color mt-4 newsletter-p-sm">
          Get daily news on upcomming offers from many suppliers all over the
          world
        </p>
        <div className="newsletter-search mt-5 text-center mb-5">
          <form action="">
            <div className="input-group mb-3 w-75 mx-auto">
              <input
                type="text"
                className="form-control "
                placeholder="Recipient's Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text subscribe-btn cursor-pointer"
                  id="basic-addon2"
                >
                  Subcribe
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetterSection;
