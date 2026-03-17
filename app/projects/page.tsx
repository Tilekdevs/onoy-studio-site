import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export default function ProjectsPage() {
  redirect(`/${DEFAULT_LOCALE}/projects`);
}
