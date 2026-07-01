import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "3 Patti Room for PC – Download on Windows Guide 2026";
const PAGE_DESCRIPTION =
  "Play 3 Patti Room on PC using BlueStacks, LD Player or Nox Player. Complete guide to install Teen Patti Room on Windows 10/11.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/3-patti-room-for-pc` },
};

const pcSteps = [
  "First, you need to download an Android Emulator to create an Android Setup on your PC.",
  "You should install the emulators, like BlueStacks, LD Player, or Nox Player. Make sure to download it from the official website.",
  "Open the emulator and sign in with your Google Account.",
  "Download the latest version of the 3 Patti Room app from a trusted website.",
  "Tap on the Install APK option inside an emulator and allow unknown sources if asked.",
  "Once the game is successfully installed, you can start exploring games to earn real cash.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "PC Version", path: ROUTES.pc },
];

export default function PCPage() {
  return (
    <>
      <PageSchemas
        id="pc-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.pc, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Install 3 Patti Room on PC",
          description: PAGE_DESCRIPTION,
          steps: pcSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="3 Patti Room for PC"
        description="If you want to install 3 Patti Room on your PC, you need to follow the steps below."
      />
      <GuideContent>
        <StepList title="For PC" intro="Install 3 Patti Room on Windows using an Android emulator." steps={pcSteps} />
        <div className="glass-card overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>PC</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Operating System", "Windows 10 or 11"],
                ["RAM", "4GB"],
                ["Storage", "2GB"],
                ["Internet", "Strong 5G"],
              ].map(([req, val]) => (
                <tr key={req}>
                  <td className="font-medium text-white">{req}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm text-center">
          <Link href={ROUTES.download} className="text-accent hover:text-accent-light">
            View full Android download guide
          </Link>
          {" · "}
          <Link href={`${ROUTES.blog}/ip-exceeds-limit-3-patti-room-fix`} className="text-accent hover:text-accent-light">
            Fix IP exceeds limit on PC
          </Link>
        </p>
      </GuideContent>
    </>
  );
}
