const nav_menus_list = [
  {
    id:1,
    link: '/',
    title: 'Home',
    megamenu: false,
  
  },
  {
    id:2,
    link: '/#services',
    title: 'Services',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/service', title: 'Services' },
      { link: '/service-details', title: 'Service Details' },
    ]
  },
  {
    id:3,
    link: '/shop',
    title: 'Shop',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Shop' },
      { link: '/shop-details', title: 'Shop Details' },
      { link: '/wishlist', title: 'Wishlist' },
      { link: '/cart', title: 'Cart' },
      { link: '/checkout', title: 'Checkout' },
    ]
  },
  {
    id:4,
    link: '/blog',
    title: 'Blog',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/blog', title: 'Blog' },
      { link: '/blog-details', title: 'Blog Details' },
    ]
  },
  {
    id:5,
    link: '/about',
    title: 'Pages',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/about', title: 'About' },
      { link: '/portfolio', title: 'Portfolio' },
      { link: '/portfolio-details', title: 'Portfolio Details' },
      { link: '/team', title: 'Team' },
      { link: '/team-details', title: 'Team Details' },
      { link: '/faq', title: 'FAQ' },
      { link: '/login', title: 'Login' },
      { link: '/register', title: 'Register' },
      { link: '/error-page', title: '404 Page' },
    ]
  },
  {
    id:6,
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;