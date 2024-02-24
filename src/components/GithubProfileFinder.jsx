/* eslint-disable react/prop-types */
import { useState } from "react";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  function handleSubmit() {
    fetchData();
  }
  return (
    <main className="mx-auto my-16 w-full max-w-xl">
      <div className="flex flex-col justify-center gap-6 px-14 sm:flex-row sm:p-0">
        <input
          type="text"
          className="w-full rounded-md border border-black px-6 py-2"
          placeholder="Search Github Username..."
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="button"
          className="rounded-md bg-blueDark px-8 py-2 text-white"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {loading && (
        <h3 className="mt-5 text-center text-xl font-bold">Loading...</h3>
      )}
      {error && <h3 className="mt-5 text-center text-xl font-bold">{error}</h3>}
      {userData && !loading && <User userData={userData} />}
    </main>
  );
}

function User({ userData }) {
  const {
    login,
    created_at,
    public_repos,
    followers,
    following,
    name,
    id,
    avatar_url,
  } = userData;
  const createDate = new Date(created_at);

  return (
    <div className="mt-10 flex flex-col gap-4 px-6">
      <img
        src={avatar_url}
        alt={login || name}
        className="mx-auto w-full max-w-[11rem] rounded-full bg-cover  bg-center"
      />
      <h3 className="text-center text-2xl font-bold">{login || name}</h3>
      <div className="flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col gap-2">
          <p className="">Followers: {followers}</p>
          <p className="">Following: {following}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="">Public Repo: {public_repos}</p>
          <p className="">id: {id}</p>
        </div>
      </div>
      <p className="flex flex-col text-center text-sm">
        Created Account{" "}
        <span className="text-lg font-medium">{`${createDate.getDate()} ${createDate.toLocaleDateString(
          "en-us",
          {
            month: "short",
          },
        )} ${createDate.getFullYear()}`}</span>
      </p>
    </div>
  );
}
