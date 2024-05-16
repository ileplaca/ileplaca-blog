import React from 'react'
import { routes } from '../menu/menu'
import { Link } from 'gatsby'

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link to='/' className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ileplaca blog</span>
          </Link>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">OTHER PAGES</h2>
            <nav className="mb-10 list-none">
              {
                routes.map(route => (
                  <li>
                    <Link key={route.name} to={route.link} className="text-gray-600 hover:text-gray-800">{route.name}</Link>
                  </li>
                ))
              }
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer