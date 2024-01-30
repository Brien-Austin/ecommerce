import MobileNavBar from "./_components/mobile-navbar"
import NavBar from "./_components/nav-bar"

export default async function UserLayout({children}: {children :React.ReactNode}){
    return (<div>
        <div className="lg:block sm:hidden">
        <NavBar/>
        </div>
        <div className="sm:block lg:hidden">
        <MobileNavBar/>
        </div>
        <div className="lg:px-24 sm:px-10 sm:pt-5 lg:pt-3">
        {children}
        </div>
        </div>
        )
    }