"use client";

import { pricingPlan } from "@/constants/contstants";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("daily");

  const changePlan = (e) => {
    setSelectedPlan(e.target.value);
    console.log(selectedPlan);
  };
  return (
    <div className="flex flex-col gap-10">
      {/* button */}
      <div className="w-fit mx-auto mt-10 px-1 py-1 rounded-md bg-[#E8E9EB]">
        <div className="flex items-center gap-2 font-grotesk font-medium text-base">
          <label
            htmlFor="daily"
            className={
              selectedPlan === "daily"
                ? "px-4 py-2 bg-white rounded-md"
                : "px-4 py-2"
            }
          >
            <input
              type="radio"
              name="pricing"
              id="daily"
              value="daily"
              className="hidden"
              onChange={(e) => changePlan(e)}
            />{" "}
            Daily Pass
          </label>
          <label
            htmlFor="weekly"
            className={
              selectedPlan === "weekly"
                ? "px-4 py-2 bg-white rounded-md"
                : "px-4 py-2"
            }
          >
            <input
              type="radio"
              name="pricing"
              id="weekly"
              value="weekly"
              className="hidden"
              onChange={(e) => changePlan(e)}
            />{" "}
            Weekly Pass
          </label>
        </div>
      </div>
      {/* table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-3 md:mt-10">
        {pricingPlan.map((plan) => (
          <div className="border pt-20 rounded-md relative">
            {plan.plan === "Weekly pass" && (
              <div className="absolute -top-2 md:-top-5 left-5 bg-[#8D448B] text-white text-sm font-satoshi rounded-md px-4 py-2">
                Recommended
              </div>
            )}
            <div className="flex items-center justify-between my-8 px-5">
              <div className="font-bold font-grotesk text-lg text-[#0F2137]">
                {plan.plan}
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>

            {/* benefits */}
            <div className="flex flex-col gap-6">
              {plan.benefits.map((feature) => (
                <aside className="flex items-center gap-3 px-5">
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className={
                        feature.available ? "text-primary" : "text-gray-300"
                      }
                    />
                  </div>
                  <div className="font-satoshi font-normal text-base">
                    <p
                      className={
                        feature.available ? "text-textGray" : "text-gray-300"
                      }
                    >
                      {feature.name}
                    </p>
                  </div>
                </aside>
              ))}
              <div className="font-satoshi bg-bgGray p-5 mt-5">
                <p className="font-normal text-sm mb-2">Starting from</p>
                <div className="text-lg text-primary font-bold">
                  {plan.plan === "Weekly pass" ? (
                    <p className="">NGN 10,000/6 days</p>
                  ) : (
                    <p className="">NGN 1,500/day</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
