import { Bio } from "~/components";
import { PageLayout } from "~/layouts";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="-mt-12 sm:mt-0">
        <Bio />
      </div>
    </PageLayout>
  );
}
