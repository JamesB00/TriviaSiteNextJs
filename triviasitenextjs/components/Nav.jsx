"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [windowCheck, setWindowcheck] = useState(typeof window !== undefined);
  const { push } = useRouter();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    push(`/search/${searchText}`);
  };

  useEffect(() => {
    setWindowcheck((prev) => !prev);
  }, [typeof window]);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  });

  //Need to work on adding state for user signed in and do the conditional
  //rendering for it.

  return (
    <div className="grid sm:flex w-full grid-cols-3 bg-gray-400 min-h-[3rem]">
      {/* Main logo/text */}
      <div className="flex text-center text-xl lg:text-2xl col-start-1 col-span-1 sm:flex ml-2 sm:ml-5 sm:mr-auto">
        <Link href="/" className="my-auto">
          Minute Quizzes
        </Link>
      </div>
      {/* Nested ternary, bad practice but checks to make sure the window exists before checking substring */}
      {windowCheck ? (
        <div></div>
      ) : window.location.href.includes("/search/") ? (
        <div></div>
      ) : (
        /* Desktop Search bar */
        <div className="hidden sm:flex col-span-1 col-start-2">
          <div className="bg-white text-black min-h-[2rem] my-2 rounded-l-lg flex">
            <Image src="search.svg" width={15} height={15} className="ml-2" />
          </div>
          <form onSubmit={handleSearchSubmit}>
            <input
              placeholder="Search for a specific quiz"
              className="text-black rounded-r-lg my-2 min-h-[2rem] lg:min-w-[400px] pl-2"
              onChange={handleSearchChange}
            ></input>
          </form>
        </div>
      )}

      {/* Desktop Options */}
      <div className="hidden sm:flex ml-auto mr-5 justify-between gap-3 lg:gap-6">
        {session?.user ? (
          <div className="flex gap-2">
            <button className="">
              <Link href="/quiz">Play Quiz</Link>
            </button>

            <button onClick={() => signOut()} className="">
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Dropdown Toggler */}
      <div
        onClick={() => {
          setToggled((prev) => !prev);
        }}
        className="col-start-3 sm:hidden sm:justify-end hover:cursor-pointer my-auto"
      >
        <Image
          src="/icons8-menu.svg"
          className="bg-white mx-auto rounded-3xl p-1"
          width={25}
          height={25}
        />
      </div>

      {/* Mobile Dropdown Options */}
      {toggled && (
        <div className="sm:hidden flex flex-col absolute  right-1 top-14  ">
          <div className="dropdown_link rounded-t-lg border-4 border-gray-900">
            <p>Profile</p>
          </div>
          <div className="dropdown_link border-x-4 border-gray-900">
            <p>Community</p>
          </div>
          <div className="dropdown_link border-4 rounded-b-lg border-gray-900">
            <p>Sign Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
