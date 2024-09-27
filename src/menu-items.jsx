const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        }
      ]
    },
    {
      id: 'utilities',
      title: 'Utilities',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'master',
          title: 'Masters',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'room category',
              title: 'Room Category',
              type: 'item',
              url: '/basic/button'
            },
            {
              id: 'rooms',
              title: 'Rooms',
              type: 'item',
              url: '/basic/badges'
            },
            {
              id: 'breadcrumb-pagination',
              title: 'Ledger(Head Master)',
              type: 'item',
              url: '/basic/breadcrumb-pagination'
            },
            {
              id: 'collapse',
              title: 'Expense head',
              type: 'item',
              url: '/basic/collapse'
            },
            {
              id: 'Feedback-question',
              title: 'Feedback Questions',
              type: 'item',
              url: '/basic/typography'
            },
            {
              id: 'tooltip-popovers',
              title: 'Tooltip & Popovers',
              type: 'item',
              url: '/basic/tooltip-popovers'
            }
          ]
        }
      ]
    },
    {
      id: 'Transaction',
      title: 'Transaction',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'Complaint board',
          title: 'Complaint board',
          type: 'item',
          icon: 'feather icon-alert-circle',
          url: '/auth/signin-1',
          // target: true,
          // breadcrumbs: false
        },
        {
          id: 'Service board',
          title: 'Service board',
          type: 'item',
          icon: 'feather icon-layers',
          url: '/auth/signup-1',
          // target: true,
          // breadcrumbs: false
        },
        {
          id: 'Booking Dashboard',
          title: 'Booking Dashboard',
          type: 'item',
          icon: 'feather icon-calendar',
          url: '/auth/reset-password-1',
          // target: true,
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'Report',
      title: 'Report',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'Feedback-Report',
          title: 'Feedback Report',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-bar-chart'
        },
        {
          id: 'Daily-collection-report',
          title: 'Daily collection report',
          type: 'item',
          url: '/sample-page1',
          classes: 'nav-item',
          icon: 'feather icon-file-text'
        },
       
        {
          id: 'Check room status',
          title: 'Check room status',
          type: 'item',
          url: '/sample-page2',
          classes: 'nav-item',
          icon: 'feather icon-check-square'
        },
        {
          id: 'Booking history',
          title: 'Booking history',
          type: 'item',
          url: '/sample-page3',
          classes: 'nav-item',
          icon: 'feather icon-book'
        },
        {
          id: 'Expense Report',
          title: 'Expense Report',
          type: 'item',
          url: '/sample-page4',
          classes: 'nav-item',
          icon: 'feather icon-pie-chart'
        },
      
        
      ]
    }
  ]
};

export default menuItems;
