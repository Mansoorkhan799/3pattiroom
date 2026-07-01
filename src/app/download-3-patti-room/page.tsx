import { Metadata } from "next";
import Link from "next/link";
import PageHero, { GuideContent, StepList } from "@/components/GuidePage";
import AppInfoTable from "@/components/AppInfoTable";
import PageSchemas from "@/components/PageSchemas";
import { SITE_ORIGIN } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const PAGE_TITLE = "Download 3 Patti Room APK – Official Guide for Pakistan 2026";
const PAGE_DESCRIPTION =
  "Download 3 Patti Room APK for Android, iOS and PC. Official installation guide with system requirements. Teen Patti Room Pakistani earning app free download.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/download-3-patti-room` },
};

const androidSteps = [
  "Open your browser, and search for the Latest version www.3PattiRoomapp.net.pk.",
  "Make sure to visit a trusted site that is safe and secure.",
  "Locate the download button and tap on it to start the process.",
  "Wait until the file is downloaded and saved to your device.",
  "Now, go to your phone settings > security and enable Installation from unknown sources.",
  "Open your download manager and look for the 3 Patti Room download APK file.",
  "Click on the downloaded file to start the installation and wait until it completes on your device.",
  "Once the installation is completed, you can launch the app to start playing and earning money.",
];

const iosSteps = [
  "First, open the Safari Browser on your iOS device, such as an iPhone or iPad.",
  "Make sure your browser is updated for better and smoother performance.",
  "Search for the official website of 3 Patti Room.",
  "Open the official website and find the download button.",
  "Tap on the download button, and wait until the download completes on your device.",
  "Once the app is installed, you need to allow permission if asked.",
  "Now, go to Settings >General > Device Management and click on trust this developer option.",
  "Once the app is installed, launch it on your device to start making money.",
];

const breadcrumbs = [
  { name: "Home", path: ROUTES.home },
  { name: "Download Guide", path: ROUTES.download },
];

export default function DownloadPage() {
  return (
    <>
      <PageSchemas
        id="download-page-schema"
        breadcrumbs={breadcrumbs}
        page={{ path: ROUTES.download, title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
        howTo={{
          name: "How to Download 3 Patti Room APK on Android",
          description: PAGE_DESCRIPTION,
          steps: androidSteps,
        }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        title="Download 3 Patti Room APK"
        description="Teen Patti Room is a popular online card game that allows you to enjoy a wide variety of games with its smooth graphics, easy control, and fast gameplay. Click on the given download button to download this game."
      />
      <GuideContent>
        <AppInfoTable />
        <StepList
          title="For Android"
          intro="Here is the step-by-step process to download the 3Patti Room application on your Android device;"
          steps={androidSteps}
        />
        <StepList
          title="For iOS"
          intro="If you are using any iOS device, follow these simple steps to download this app;"
          steps={iosSteps}
        />
        <div className="glass-card overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>System</th>
                <th>Android</th>
                <th>IOS</th>
                <th>PC</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Operating System", "Android 7.0+", "IOS 11.0+", "Windows 10 or 11"],
                ["RAM", "2GB", "4GB", "4GB"],
                ["Storage", "500MB", "500MB", "2GB"],
                ["Internet", "Stable 4G", "Strong 4G", "Strong 5G"],
              ].map(([sys, android, ios, pc]) => (
                <tr key={sys}>
                  <td className="font-medium text-white">{sys}</td>
                  <td>{android}</td>
                  <td>{ios}</td>
                  <td>{pc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Install issues? See{" "}
          <Link href={`${ROUTES.blog}/ip-exceeds-limit-3-patti-room-fix`} className="text-accent hover:text-accent-light">
            IP exceeds limit fix
          </Link>{" "}
          or play on{" "}
          <Link href={ROUTES.pc} className="text-accent hover:text-accent-light">
            PC version guide
          </Link>
          .
        </p>
      </GuideContent>
    </>
  );
}
