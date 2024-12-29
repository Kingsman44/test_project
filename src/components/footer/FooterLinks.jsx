import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  const links = [
    { title: 'Company', items: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      // { name: 'Careers', path: '/careers' },
      // { name: 'Blog', path: '/blog' }
    ]},
    { title: 'Properties', items: [
      { name: 'Residential', path: '/apartments' },
      { name: 'Commercial', path: '/apartments' },
      { name: 'Agricultural', path: '/apartments' },
      { name: 'Educational', path: '/apartments' }
    ]}
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-gray-800 font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;