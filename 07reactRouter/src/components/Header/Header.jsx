import React from 'react'
import {Link, NavLink} from 'react-router-dom';
/*
Link tag is used in place of <A> tag,
<A> tag use karne me poora page refresh hota, but
React me page refresh hota nhi,, dom repaint hota to
isiliye, Link tag use karte
a me jahan href likhte, wahin link me to likhte


NavLink kuch additionaly cheeje point karta,
Navbar me kaun se page pe hai, usse show karne ke liye,
NavLink me direct ek variable ka access milta, isActive
yeh url se map hota and yeh batata ki current page abhi active hai ki nhi,

NavLink me classes bhi callback() => {} ke roop me dete inside backticks
kyuki hume wahan javascript likhni hoti hai,
for example, ${isActive ? "true hai to yeh karo" : "false hai toh yeh karo"}
ab yahan true and false ke basis pe hum color wagera change kar sakte jisse pata chale
ki kaun sa page abhi active hai.


<li>: This is an HTML list item element, used to create a list item within an unordered or ordered list.

<NavLink>: This is a component provided by react-router-dom for creating navigation links in a React application. It's similar to the standard HTML <a> tag but is specifically designed for use in React applications and allows you to create links that navigate between different routes defined in your application.

to="/about": This prop specifies the URL that the link should navigate to when clicked. In this case, it navigates to the "/about" route.

className={({isActive}) => ... }: This is a dynamic class name declaration using a function. The function receives an isActive parameter, which likely indicates whether the current link is active (i.e., the user is on the corresponding route). Depending on the value of isActive, the function conditionally applies different CSS classes to style the link.

The template literal (``) inside the className prop contains a series of CSS classes separated by spaces. These classes control various visual aspects of the link, such as padding, border, text color, background color, and hover effects. The classes are conditionally applied based on the value of isActive.

About: This is the text content of the link. It will be displayed to the user as the visible text of the navigation link.

Overall, this code snippet creates a list item containing a NavLink component that navigates to the "/about" route when clicked. The appearance of the link is dynamically styled based on whether it is currently active or not, providing visual feedback to the user.

*/

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Link and NavLink is coming from React Router DOM */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"

                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/github"

                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}