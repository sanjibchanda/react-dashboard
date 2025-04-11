import React from "react";
import { LuChevronDown } from "react-icons/lu";
const Form = () => {
  return (
    <>
      <div className="space-y-4 bg-gray-100 p-5 rounded">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Contact Form
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="first name"
                      className="block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      name="last-name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="last name"
                      className="block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      type="email"
                      autoComplete="given-name"
                      placeholder="email"
                      className="block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-1 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 appearance-none block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <LuChevronDown
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm/6 font-medium"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      name="state"
                      type="text"
                      autoComplete="given-name"
                      placeholder="State / Province"
                      className="block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="zip" className="block text-sm/6 font-medium">
                    ZIP / Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      name="zip"
                      type="text"
                      autoComplete="given-name"
                      placeholder="ZIP / Postal code"
                      className="block w-full rounded bg-white p-2 text-sm outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
