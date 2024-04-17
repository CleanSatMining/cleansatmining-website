"use client";

export default function TopNavigation() {
  return (
    <div>
      <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-grey-300">
        <div className="w-full flex items-center justify-between space-x-10">
          <ul className="flex md:flex-wrap -mx-5 -my-2">
            <li className="mx-5 my-2">
              <button className="font-medium whitespace-nowrap text-brand-500">
                Description
              </button>
            </li>
            <li className="mx-5 my-2">
              <button className="font-medium whitespace-nowrap text-grey-300 hover:text-grey-100 transition duration-150 ease-in-out">
                Installations
              </button>
            </li>
            <li className="mx-5 my-2">
              <button className="font-medium whitespace-nowrap text-grey-300 hover:text-grey-100 transition duration-150 ease-in-out">
                Equipe
              </button>
            </li>
            <li className="mx-5 my-2">
              <button className="font-medium whitespace-nowrap text-grey-300 hover:text-grey-100 transition duration-150 ease-in-out">
                Spec
              </button>
            </li>
            <li className="mx-5 my-2">
              <button className="font-medium whitespace-nowrap text-grey-300 hover:text-grey-100 transition duration-150 ease-in-out">
                Simulation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
