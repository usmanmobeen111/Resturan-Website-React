import React from "react";
import {
  FaUtensils,
  FaShippingFast,
  FaMoneyBillWave,
  FaShoppingCart,
  FaConciergeBell,
  FaSmile,
  FaShieldAlt,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="bg-light py-20 px-6 md:px-16">
      {/* Top Section - Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {/* 1️⃣ Quality Food */}
        <div className="rounded-2xl bg-white shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <FaUtensils className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-dark mb-2">
            Quality Food
          </h3>
          <p className="text-dark/70 text-sm leading-relaxed">
            Experience culinary excellence with our commitment to fresh
            ingredients and masterful preparation.
          </p>
        </div>

        {/* 2️⃣ Fast Delivery */}
        <div className="rounded-2xl bg-white shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <FaShippingFast className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-dark mb-2">
            Fast Delivery
          </h3>
          <p className="text-dark/70 text-sm leading-relaxed">
            Get your food delivered hot and fresh — right at your doorstep in
            record time.
          </p>
        </div>

        {/* 3️⃣ Cash By Hand */}
        <div className="rounded-2xl bg-white shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <FaMoneyBillWave className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-dark mb-2">Cash by Hand</h3>
          <p className="text-dark/70 text-sm leading-relaxed">
            We value convenience — pay easily with cash upon delivery, no
            hidden charges.
          </p>
        </div>

        {/* 4️⃣ Easy Checkout */}
        <div className="rounded-2xl bg-white shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <FaShoppingCart className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-dark mb-2">Easy Checkout</h3>
          <p className="text-dark/70 text-sm leading-relaxed">
            Smooth and secure checkout process — because your time matters.
          </p>
        </div>
      </div>

      {/* Bottom Section - Why Choose Us */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/about.jpg"
            alt="About Us"
            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Why People <span className="text-primary">Choose Us?</span>
          </h2>
          <p className="text-dark/70 leading-relaxed">
            We go beyond serving meals — we craft experiences. Every bite tells
            a story of passion, quality, and care. That’s why our customers keep
            coming back.
          </p>

          <div className="space-y-6">
            {/* 1️⃣ Convenient and Reliable */}
            <div className="flex items-start gap-4">
              <FaConciergeBell className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Convenient and Reliable
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  From easy ordering to fast service — every step is designed to
                  make your experience hassle-free.
                </p>
              </div>
            </div>

            {/* 2️⃣ Delightful Experience */}
            <div className="flex items-start gap-4">
              <FaSmile className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Delightful Experience
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Every visit, every delivery, every meal — our goal is simple:
                  make you smile with every bite.
                </p>
              </div>
            </div>

            {/* 3️⃣ Hygienic & Safe Cooking */}
            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-primary text-3xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-dark">
                  Hygienic & Safe Cooking
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  Our kitchen follows strict hygiene and safety standards —
                  ensuring that every dish is as pure as it is delicious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
