import { Metadata } from "next";
import { YourCaseClient } from "./your-case-client";

export const metadata: Metadata = {
  title: "Ваш кейс | NerdServ",
  description: "Как проходит работа над проектом — от первого контакта до сдачи и поддержки."
};

export default function YourCasePage() {
  return <YourCaseClient />;
}
