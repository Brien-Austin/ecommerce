import NavBar from "./_components/nav-bar"

export default async function UserLayout({children}: {children :React.ReactNode}){
    return (<div>
        <NavBar/>
        <div className="px-24 pt-3">
        {children}
        </div>
        </div>
        )
    }