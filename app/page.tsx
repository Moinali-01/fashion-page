import Nav from "@/components/nav"
import Primary from "@/components/primary"
import Collab from "@/components/collab"
import NewArrival from "@/components/new-arrival"
import PaydaySale from "@/components/payday-sale"
import YoungsFavourite from "@/components/youngs-favourite"
import AppDownload from "@/components/app-download"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <Primary />
      <Collab />
      <NewArrival />
      <PaydaySale />
      <YoungsFavourite />
      <AppDownload />
      <Newsletter />
      <Footer />
    </>
  )
}
