import AssetManagement from "../components/asset-management"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function AssetManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24">
        <AssetManagement />
      </div>
      <Footer />
    </main>
  )
}

