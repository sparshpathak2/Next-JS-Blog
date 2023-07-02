// "use client"
import React from 'react'
// import Link from 'next/link'
// import { useEffect } from 'react'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard",
    },
]



const Navbar = () => {

    // useEffect(() => {
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);

    return (
        

        //     {/* {links.map(link => (
        //     <Link id={link.id} href={link.url}>{link.title}</Link>
        // ))} */}

            // {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            //     <div className="container-fluid">
            //         <a className="navbar-brand" href="/">Next JS Blog</a>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //                 <li className="nav-item">
            //                     <a className="nav-link active" aria-current="page" href="/">Home</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="/about">About</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="/contact">Contact</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="/dashboard">Dashboard</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="/blog">Blog</a>
            //                 </li>
            //                 <li className="nav-item dropdown">
            //                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //                         Dropdown
            //                     </a>
            //                     <ul className="dropdown-menu">
            //                         <li><a className="dropdown-item" href="#">Action</a></li>
            //                         <li><a className="dropdown-item" href="#">Another action</a></li>
            //                         <li><hr className="dropdown-divider" /></li>
            //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
            //                     </ul>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link disabled">Disabled</a>
            //                 </li>
            //             </ul>
            //             <form className="d-flex" role="search">
            //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            //                 <button className="btn btn-outline-success" type="submit">Search</button>
            //             </form>
            //         </div>
            //     </div>
            // </nav> */}


            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">NextJS Blog</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href='/blog'>Blog</a>
                        <a className="mr-5 hover:text-gray-900" href='/dashboard'>Dashboard</a>
                        <a className="mr-5 hover:text-gray-900" href='/about'>About</a>
                        <a className="mr-5 hover:text-gray-900" href='/contact'>Contact</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>



        
    )
}

export default Navbar