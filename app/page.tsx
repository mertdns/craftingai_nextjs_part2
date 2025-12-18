import { redirect } from "next/navigation";

export default function Home() {
  // Middleware locale'i otomatik algılayacak, sadece /landing'e yönlendir
  // Middleware bu isteği yakalayıp /{locale}/landing'e çevirecek
  redirect("/tr/landing");
}
