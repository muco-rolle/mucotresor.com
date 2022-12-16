import { seo } from "~/config/seo";
import { ProfileImage } from "./profile-image";

export function Bio() {
  return (
    <>
      <div className="flex items-center space-x-6">
        <ProfileImage size="large" />

        <div>
          <h1 className="text-3xl font-medium text-zinc-100/80 sm:text-4xl">
            Trésor Muco
          </h1>
          <h2 className="text-lg leading-6 align-middle text-zinc-100/50">
            <span className="sm:inline">Developer Advocate </span>
            at <span className="font-medium text-zinc-100/70">Leapa.</span>
          </h2>
        </div>
      </div>
      <p className="mt-7 text-xl text-zinc-100/90 sm:mt-9">{seo.description}</p>
    </>
  );
}
