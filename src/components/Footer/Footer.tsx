import {
  faArrowRight,
  faCalendar,
  faLocation,
  faMailForward,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const socialLinks = [
    {
      icon: (
        <svg
          fill=''
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'
          width='25'
          height='20'
          viewBox='0 0 14.906 32'
          className='fill-primary-400  group-hover:fill-white'
        >
          <path d='M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z' />
        </svg>
      ),
      href: '',
    },
    {
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='fill-primary-400  group-hover:fill-white'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
            fill=''
          />
          <path
            d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
            fill=''
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
            fill=''
          />
        </svg>
      ),
      href: '',
    },
    {
      icon: (
        <svg
          fill=''
          width='25'
          height='20'
          viewBox='0 0 1920 1920'
          className='fill-primary-400  group-hover:fill-white'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z'
            fillRule='evenodd'
          />
        </svg>
      ),
      href: '',
    },
  ];

  const contents = [
    {
      title: 'Links',
      links: [
        { title: 'About', href: '#' },
        { title: 'Experience', href: '#' },
        { title: 'Skills', href: '#' },
        { title: 'My Blog', href: '#' },
        { title: 'Contact', href: '#' },
      ],
    },
  ];

  return (
    <footer>
      {/* <div className='mx-auto my-0 grid max-w-[1200px] grid-cols-1 items-start gap-10 px-8   py-20 sm:grid-cols-2 sm:flex-row sm:gap-16 md:grid-cols-3 md:gap-20 md:gap-y-0 md:px-0 lg:grid-cols-5 lg:gap-x-4'> */}
      <div className='mx-auto my-0 max-w-[1200px] flex-row items-start  justify-between gap-10 px-8   py-20  sm:gap-16 md:flex md:grid-cols-3 md:gap-20 md:gap-y-0 md:px-0 lg:gap-x-4'>
        <div className='flex items-start gap-20'>
          <div>
            <div className=' cursor-pointer'>
              <h2 className='hover:text-primary-400  pb-6 text-2xl text-white  transition-all md:text-4xl'>
                MEHRAB
              </h2>
              <p className='text-2xl font-[600] text-white md:text-[15px]'>
                Full Stack Developer
              </p>
            </div>
            <p className='pt-8  text-[15px] text-gray-600 md:max-w-[250px] md:text-lg'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>

            <div className='flex gap-2 py-6'>
              {socialLinks.map((link, i) => {
                return (
                  <a
                    key={i}
                    className='hover:bg-primary-800 text-primary-400 group  flex h-10 w-10  items-center justify-center rounded-full bg-[#666] bg-opacity-70  transition-all  '
                    href={link.href}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            {contents.map((content, i) => {
              return (
                <ul key={i}>
                  <li className='pt-2 text-xl font-[600] text-white'>
                    {content.title}
                  </li>
                  <div className='pt-8 '>
                    {content.links.map((link, i) => {
                      return (
                        <li
                          key={i}
                          className='hover:text-primary-600 group flex items-center gap-2 pb-4 text-lg font-[600] text-gray-600'
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            color='gray'
                            className='group-hover:text-primary-600'
                            size='sm'
                          />
                          <a href={link.href}>{link.title}</a>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              );
            })}
          </div>
        </div>

        <div>
          <div className='text-xl font-[600] text-white'>Have a Questions?</div>
          <div className='pt-8'>
            <div className='item-start flex gap-8'>
              <FontAwesomeIcon
                icon={faLocation}
                className='text-primary-600 pt-2'
                size='sm'
              />
              <p className=' pt-0 text-lg text-gray-600 md:max-w-[200px]'>
                {' '}
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className='item-start flex gap-8 pt-4'>
              <FontAwesomeIcon
                icon={faPhone}
                className='text-primary-600 pt-1'
                size='sm'
              />
              <a
                href='tel:7256895889'
                className=' hover:text-primary-600 cursor-pointer pt-0 text-lg text-gray-600 md:max-w-[200px]'
              >
                +91 7256895889
              </a>
            </div>
            <div className='item-start flex gap-8 pt-4'>
              <FontAwesomeIcon
                icon={faMailForward}
                className='text-primary-600 pt-2'
                size='sm'
              />
              <a
                href='mailto:mehrab2000alam@gmail.com'
                className=' hover:text-primary-600 cursor-pointer pt-0 text-lg text-gray-600 md:max-w-[200px]'
              >
                mehrab2000alam@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
