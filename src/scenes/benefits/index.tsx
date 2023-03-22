import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = (setSelectedPage: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full 2-5/6 py-20"
    >Benefits</section>
  )
}

export default Benefits