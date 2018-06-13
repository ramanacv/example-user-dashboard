import { svg } from 'assets'

export default [
{
  title: 'Home',
  to: '/',
  styled: {
    pl: 15,
  },
  // svg: svg.garage,
},
{
  title: 'Dashboard',
  to: '/dashboard',
  styled: {
    pl: 15,
  },
  // svg: svg.commerceOnlineBanking,
},
{
  title: 'People',
  to: '/dashboard/people',
  styled: {
    pl: 15,
  },
  // svg: svg.dna,
},
{
  title: 'Events',
  to: '/dashboard/events',
  styled: {
    pl: 15,
  },
  childrenItems: [
    {
      title: 'Event Add',
      to: '/dashboard/event/add',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
      styled: {
        align: 'center',
        display: 'flex',
        w: 270
      },
    },
  ]
},
{
  title: 'Projects',
  to: '/dashboard/projects',
  // svg: svg.dna,
  styled: {
    pl: 15,
  },
  childrenItems: [
    {
      title: 'Project Add',
      to: '/dashboard/project/add',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
      styled: {
        align: 'center',
        display: 'flex',
        w: 270
      },
    },
  ]
},
{
  title: 'Smart Contracts',
  to: '/dashboard/contracts',
  styled: {
    pl: 15,
  },
  // svg: svg.dataMining,
},
{
  title: 'Settings',
  to: '/dashboard/settings',
  styled: {
    pl: 15,
  },
  // svg: svg.cog,
},
]